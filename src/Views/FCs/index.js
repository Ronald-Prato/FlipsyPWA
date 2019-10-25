import React, { useState, useContext, useEffect } from 'react'
import { FCWrapper, FCBox, FCTitle } from './styles.fc'
import Context from '../../Global/context'
import { navigate } from '@reach/router'
import { CheckConnection } from '../../Services/CheckConnections'
import { Icon } from 'antd'
import { RenderFC } from '../../Components/RenderFC'


export const FCs = () => {
    const { state, actions } = useContext(Context)



    useEffect(() => {
        state.current_fcg.title ? console.log() : navigate('home')
        CheckConnection().then(() => {
            setCurrentFCGId(state.current_fcg.id)
            setShowLoading(false)
        })
    }, [])

    const [CurrentFCGId, setCurrentFCGId] = useState("")
    const [ShowLoading, setShowLoading] = useState(true)

    return (
        <FCWrapper>
            <FCBox>
                <FCTitle> {state.current_fcg.title} </FCTitle>
            </FCBox>

            <FCBox>

                {
                    ShowLoading ?
                        <div />
                        :
                        <RenderFC idFcg={CurrentFCGId} />
                }
            </FCBox>




        </FCWrapper>
    )
} 