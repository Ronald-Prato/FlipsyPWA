import React, { useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { FCGRenderWrapper, FCGImageWrapper, FCGTitle, FCGRetentive } from './styles.renderfcg'
import Context from '../../Global/context'
import { navigate } from '@reach/router'


const Query = gql`
            query Search($id: ID!) {
                USER(idUser: $id){
                    fcg {
                        idFcg title retentive
                    }
                }
            }
        `

export const RenderFCG = ({ userId }) => {

    const { state, actions } = useContext(Context)
    const { loading, error, data } = useQuery(Query, {
        variables: { id: userId },
        pollInterval: 100
    })

    if (!loading) { console.log(data.USER[0].fcg) }


    const HandleFCGSelection = fcg => {
        actions({
            type: 'setState',
            payload: { ...state, current_fcg: { title: fcg.title, retentive: fcg.retentive, id: fcg.idFcg } }
        })
        navigate('fcards')
    }

    return (
        loading ?
            <div />
            :
            <FCGRenderWrapper>
                {
                    data.USER[0].fcg.map((x, i) =>
                        <FCGImageWrapper onClick={() => HandleFCGSelection(x)} key={i}>
                            <FCGTitle> {x.title} </FCGTitle>
                            <FCGRetentive> {x.retentive}% </FCGRetentive>
                        </FCGImageWrapper>

                    )
                }

            </FCGRenderWrapper>
    )
}