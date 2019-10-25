import React, { useState, useContext, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import Context from '../../Global/context'
import { FCRenderWrapper, FCSingleResult, FCFront, NothingToShowWrapper, NothingToShowMessage, Button, AddNewFC, AddNewTitle } from './styles.renderfc'
import { navigate } from '@reach/router'
import { gql } from 'apollo-boost'
import { Icon } from 'antd'



const QueryFC = gql`
    query Search($id: ID!){
        FCGroup(idFcg: $id){
            fc {
                idFc front back comments
            }
        }
    }
`


export const RenderFC = ({ idFcg }) => {
    const { state, actions } = useContext(Context)
    const { loading, error, data } = useQuery(QueryFC, {
        variables: { id: state.current_fcg.id },
        pollInterval: 100
    })


    const HandleFCSelection = fc => {
        actions({
            type: 'setState',
            payload: { ...state, current_fc: { front: fc.front, back: fc.back, id: fc.idFc, comments: fc.comments } }
        })
        // navigate('fcvisualizer')
    }

    if (!loading) { console.log(data.FCGroup[0].fc) }
    if (error) return `Error! ${error.message}`;

    return (
        loading ?
            <div />
            :
            data.FCGroup[0].fc.length ?
                <FCRenderWrapper>
                    {
                        data.FCGroup[0].fc.map((x, i) =>
                            <FCSingleResult onClick={() => HandleFCSelection(x)} key={i}>
                                <FCFront> {x.front} </FCFront>
                            </FCSingleResult>

                        )
                    }
                    <AddNewFC onClick={() => navigate('createfc')}>
                        <Icon type="plus" />
                        <AddNewTitle> Add New </AddNewTitle>
                    </AddNewFC>
                </FCRenderWrapper>

                :
                <NothingToShowWrapper>
                    <Icon style={{ fontSize: '3em' }} type="question" />
                    <NothingToShowMessage> No flashcards created yet </NothingToShowMessage>

                    <Button onClick={() => navigate('createfc')}> Create a new flashcard </Button>
                </NothingToShowWrapper>


    )
}