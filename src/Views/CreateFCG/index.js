import React, { useState, useEffect } from 'react'
import { Icon } from 'antd'
import { navigate } from '@reach/router'
import { Button, LoadingWrapper, LoadingBox } from '../../Global/GlobalStyles'
import {
    CreateFCGWrapper, AccessOptionMessage, AccessOption, SetLeft, FinalButtonsContainer,
    InputContainer, InputTitle, Input, SectionCreateTitle, CreateTitle, FCGAccessContainer,
    PrevisualizedFCG, BoxImg, BoxTitle, BoxCategory
} from './styles.createfcg'
import { CreateUser } from '../../Services/Queries'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { CheckConnection } from '../../Services/CheckConnections'


export const CreateFCG = () => {

    const [accessStyle, setAccessStyle] = useState({ oc1: "steelblue", oc2: "steelblue", ob1: "white", ob2: "white" })
    const [localState, setLocalState] = useState({ name: "", category: "", access: "" })
    const [showLoading, setShowLoading] = useState(false)
    const [CreateUserInNeo4j] = useMutation(gql`
        mutation Create($id: ID!, $title: String!, $retentive: Float!, $access: Boolean!, $date: String!, $tags: [String!], $notifications: Int) {
            CreateFCGroup(
                idFcg: $id
                title: $title
                retentive: $retentive
                public: $access
                isStudying: false
                lastModifyDate: $date
                creationDate: $date
                specificTags: $tags
                remainingNotifications: $notifications
            ){idFcg title retentive public isStudying lastModifyDate creationDate specificTags remainingNotifications }
        }
    `)

    const [CreateOWNSConnection] = useMutation(gql`
        mutation Create($from: ID!, $to: ID!){
            AddUSEROwns(from: {idUser: $from}, to: {idFcg: $to}){
                from {
                    nickname
                }
            }
        }
    `)


    useEffect(() => {
        // console.log("Hello")
    }, []);

    const SetAccessLevel = option => {
        if (option === 'public') {
            setAccessStyle({ oc1: "white", oc2: "steelblue", ob1: "steelblue", ob2: "white" })
            setLocalState({ ...localState, access: "public" })
        }
        else {
            setAccessStyle({ oc1: "steelblue", oc2: "white", ob1: "white", ob2: "steelblue" })
            setLocalState({ ...localState, access: "private" })
        }

    }

    const SendCreationRequest = () => {
        let provisionalId = (Math.random() * 100000).toString()
        setShowLoading(true)
        CreateUserInNeo4j({
            variables: {
                id: provisionalId,
                title: localState.name,
                retentive: 2.5,
                access: localState.access === "private" ? false : true,
                date: new Date().toISOString().slice(0, 10),
                tags: ["tag1", "tag2", "tag3"],
                notifications: 1
            }
        }).then(res => {
            console.log(res.data)
            CheckConnection().then(res => {
                MakeConnection(res.attributes.sub, provisionalId)
            })
        })
            .catch(() => {
                setShowLoading(false)
                alert("There was an error, try again")
            })
    }


    const MakeConnection = (userUID, provisionalId) => {
        CreateOWNSConnection({
            variables: {
                from: userUID,
                to: provisionalId
            }
        }).then(res => {
            console.log(res.data)
            setShowLoading(false)
            navigate('fcgroups')
        })
    }

    return (
        <CreateFCGWrapper>

            <SectionCreateTitle>
                <Icon style={{ fontSize: '3em' }} type="plus-square" />
                <CreateTitle> Create a new Flashcard group </CreateTitle>
            </SectionCreateTitle>

            <InputContainer>
                <InputTitle>Flashcard group name</InputTitle>
                <Input onChange={e => setLocalState({ ...localState, name: e.target.value })} />
            </InputContainer>

            <InputContainer>
                <InputTitle>Category</InputTitle>
                <Input onChange={e => setLocalState({ ...localState, category: e.target.value })} />
            </InputContainer>

            <SetLeft>
                <InputTitle> Access Level </InputTitle>
                <FCGAccessContainer>
                    <AccessOption onClick={() => SetAccessLevel('public')} style={{ background: accessStyle.ob1, color: accessStyle.oc1 }}>
                        <Icon type="cloud" />
                        <AccessOptionMessage style={{ color: accessStyle.oc1 }} > Public </AccessOptionMessage>
                    </AccessOption>

                    <AccessOption onClick={() => SetAccessLevel('private')} style={{ background: accessStyle.ob2, color: accessStyle.oc2 }}>
                        <Icon type="lock" />
                        <AccessOptionMessage style={{ color: accessStyle.oc2 }}> Private </AccessOptionMessage>
                    </AccessOption>
                </FCGAccessContainer>
            </SetLeft>

            <PrevisualizedFCG>
                <BoxImg src={require('../../Assets/box.svg')} />
                <BoxTitle> {localState.name} </BoxTitle>
                <BoxCategory> {localState.category} </BoxCategory>
            </PrevisualizedFCG>


            <FinalButtonsContainer>
                <Button onClick={() => navigate('home')} > Back </Button>
                <Button onClick={SendCreationRequest} > Create </Button>
            </FinalButtonsContainer>

            {
                showLoading &&
                <LoadingWrapper>
                    <LoadingBox>
                        <Icon type="loading" />
                    </LoadingBox>
                </LoadingWrapper>
            }

        </CreateFCGWrapper>
    )
}