import React, { useState, useEffect, useContext } from 'react'
import { Auth } from 'aws-amplify'
import { navigate } from '@reach/router'
import {
    HomeWrapper, HomeContentWrapper, SectionNewFC,
    HomeHeader, HomeTitle, Cirle, SectionRecentFC,
    NewFCTitle, SectionFCTitle, SectionMenu,
    Centered, FCGList, NoFCG
} from './styles.home'
import { LoadingWrapper, LoadingBox } from '../../Global/GlobalStyles'
import { Icon } from 'antd'
import { SideMenu } from '../../Components/SideMenu'
import Context from '../../Global/context'

export const Home = () => {

    const { state, actions } = useContext(Context)
    const [localUser, setLocalUser] = useState({ un: "", em: "" })
    const [showLoading, setShowLoading] = useState(false)

    useEffect(() => {
        CheckUserConnection()
    }, [])

    const CheckUserConnection = async () => {
        try {
            let user = await Auth.currentAuthenticatedUser()
            setLocalUser({ un: user.username, em: user.attributes.email })
        } catch (error) { navigate('login') }
    }

    const ShowSideMenu = () => {
        actions({
            type: "setState",
            payload: { ...state, dynamic_styles: { ...state.dynamic_styles, side_menu_translation: "translateX(0)" } }
        })
    }

    return (
        <HomeWrapper>

            <SideMenu init_animation={() => setShowLoading(true)} end_animation={() => setShowLoading(false)} />

            <HomeHeader>
                <Cirle onClick={ShowSideMenu}><Icon type="menu" /></Cirle>
                <HomeTitle> Welcome {localUser.un} </HomeTitle>
                <Cirle><Icon type="bell" /></Cirle>
            </HomeHeader>

            <HomeContentWrapper>
                <SectionNewFC onClick={() => navigate('createfcg')} >
                    <Icon style={{ fontSize: '2.5em', marginRight: '.8em' }} type="plus-square" />
                    <NewFCTitle> Create a new Flashcard Group </NewFCTitle>
                </SectionNewFC>


                <SectionRecentFC>
                    <SectionFCTitle> Recent Flashcard Groups </SectionFCTitle>
                    {/* <hr style={{ background: '#dbdbdb' }} /> */}

                    <FCGList>
                        <Icon style={{ fontSize: '3em' }} type="question" />
                        <NoFCG>No flashcard groups added yet</NoFCG>
                    </FCGList>

                </SectionRecentFC>

                <SectionMenu>
                    <Centered> <Icon type="home" /> </Centered>
                    <Centered> <Icon type="team" /> </Centered>
                    <Centered> <Icon type="search" /> </Centered>
                    <Centered> <Icon type="user" /> </Centered>
                    <Centered> <Icon type="area-chart" /> </Centered>
                </SectionMenu>

            </HomeContentWrapper>

            {
                showLoading &&
                <LoadingWrapper>
                    <LoadingBox>
                        <Icon type="loading" />
                    </LoadingBox>
                </LoadingWrapper>
            }

        </HomeWrapper>
    )
}