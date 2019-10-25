import React, { useState, useEffect } from 'react'
import { Icon } from 'antd'
import { gql } from 'apollo-boost'
import { CheckConnection } from '../../Services/CheckConnections'
import { RenderFCG } from '../../Components/RenderFCG'
import { FCGWrapper, MyFCGBox, FCGTitle, LocalLoadingWrapper, LocalLoadingBox } from './styles.fcgs'

export const FCGs = () => {

    useEffect(() => {
        CheckConnection().then(res => {
            setLocalUID(res.attributes.sub)
            setShowLoading(false)
        })
    }, []);

    const [showLoading, setShowLoading] = useState(true)
    const [localUID, setLocalUID] = useState("")


    return (
        <FCGWrapper>
            <MyFCGBox>
                <FCGTitle> My Flashcard Groups </FCGTitle>

            </MyFCGBox>

            <MyFCGBox>
                {
                    showLoading ?
                        <LocalLoadingWrapper>
                            <LocalLoadingBox>
                                <Icon type="loading" />
                            </LocalLoadingBox>
                        </LocalLoadingWrapper>
                        :
                        <RenderFCG userId={localUID} />
                }
            </MyFCGBox>
        </FCGWrapper>
    )
}