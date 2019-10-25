import React, { useState, useContext, useEffect } from 'react'
import ReactCardFlip from 'react-card-flip';
import { CreateFCWrapper, CreateFCBox, CreateFCTitle, FCInputsContainer, FCGroupName, CreateFCSubtitle, SideIndicator, LocalTextArea, FCText, LocalButton, FCPreview, FCPreviewTitle } from './styles.createfc'
import Context from '../../Global/context'
import { LoadingWrapper, LoadingBox } from '../../Global/GlobalStyles'
import { navigate } from '@reach/router'
import { Icon } from 'antd'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { ConsoleLogger } from '@aws-amplify/core';

const FCMutation = gql`
    mutation Create($idFc: ID!, $front: String!, $back: String!, $last: String!, $creation: String!, $comments: String) {
        CreateFC(idFc:$idFc front:$front  back:$back lastModifyDate:$last creationDate:$creation comments: $comments)
        { idFc front back lastModifyDate creationDate comments }
    }
`

const FCRelation = gql`
    mutation Create($idFcg: ID!, $idFc: ID!) {
        AddFCContatins(from: {idFcg:$idFcg}, to: {idFc:$idFc}) {
            from { idFcg }
            to { idFc }
        }
    }
`

export const CreateFC = ({ fcg }) => {

    const { state, actions } = useContext(Context)
    const { title, retentive } = state.current_fcg
    const [flipped, setFlipped] = useState(false)
    const [LocalState, setLocalState] = useState({ front: "", back: "", comments: "" })
    const [showLoading, setShowLoading] = useState(false)
    const [CreateNewFc] = useMutation(FCMutation)
    const [CreateFcRelation] = useMutation(FCRelation)

    useEffect(() => {
        state.current_fcg.title ? console.log() : navigate('home')
    }, [])

    const HandleFCCreation = () => {
        setShowLoading(true)
        let provisionalId = (Math.random() * 100000).toString()
        CreateNewFc({
            variables: {
                idFc: provisionalId,
                front: LocalState.front,
                back: LocalState.back,
                last: new Date().toISOString().slice(0, 10),
                creation: new Date().toISOString().slice(0, 10),
                comments: LocalState.comments
            }
        }).then(res => {
            console.log(res.data)
            MakeRelation(state.current_fcg.id, provisionalId)
        })
            .catch(error => {
                console.log(error)
                setShowLoading(false)
            })
    }

    const MakeRelation = (idFcg, idFc) => {
        CreateFcRelation({
            variables: {
                idFcg: idFcg,
                idFc: idFc
            }
        })
            .then(res => {
                ResetCreation()
            })
            .catch(error => {
                console.log(error)
                setShowLoading(false)
            })
    }

    const ResetCreation = () => {
        setFlipped(false)
        setLocalState({ front: "", back: "", comments: "" })
        setShowLoading(false)
    }

    return (
        <CreateFCWrapper>
            <CreateFCBox>
                <CreateFCTitle> Create new Flashcard for group <FCGroupName>{title}</FCGroupName> </CreateFCTitle>
            </CreateFCBox>


            <FCInputsContainer>
                <CreateFCSubtitle> Front </CreateFCSubtitle>
                <LocalTextArea value={LocalState.front} onChange={e => setLocalState({ ...LocalState, front: e.target.value })} />

                <CreateFCSubtitle> Back </CreateFCSubtitle>
                <LocalTextArea value={LocalState.back} onChange={e => setLocalState({ ...LocalState, back: e.target.value })} />

                <CreateFCSubtitle> Comments </CreateFCSubtitle>
                <LocalTextArea value={LocalState.comments} onChange={e => setLocalState({ ...LocalState, comments: e.target.value })} />
            </FCInputsContainer>

            <CreateFCBox>
                <FCPreviewTitle> Preview (touch to flip) </FCPreviewTitle>
                <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
                    <FCPreview onClick={() => setFlipped(!flipped)} key="front">
                        <SideIndicator>Front</SideIndicator>
                        <FCText>{LocalState.front}</FCText>
                    </FCPreview>

                    <FCPreview onClick={() => setFlipped(!flipped)} key="back">
                        <SideIndicator>Back</SideIndicator>
                        <FCText>{LocalState.back}</FCText>
                    </FCPreview>

                </ReactCardFlip>
            </CreateFCBox>

            <LocalButton onClick={HandleFCCreation}> <Icon type="plus" /> Create </LocalButton>

            {
                showLoading &&
                <LoadingWrapper>
                    <LoadingBox>
                        <Icon type="loading" />
                    </LoadingBox>
                </LoadingWrapper>
            }
        </CreateFCWrapper>
    )
}