import React, { useState, useContext, useEffect } from 'react'
import { Icon } from 'antd'
import { navigate } from '@reach/router'
import {
    SideMenuWrapper, SideMenuHeader, SideMenuHeaderTitle,
    SectionUser, SideMenuUserImg, Circle, UserInfo, SideMenuCloseIcon,
    UserSettings, UserName, UserSettingsMessage, SectionState,
    SectionStateTitle, BetterFCGImg, BetterFCGContainer, FCGScore,
    BetterFCGMessage, SectionAccountTitle, SectionAccountContainer,
    AccountListItem, AccountItemTitle, SectionSession, CloseSessionMessage
} from './styles.side.menu'
import { CheckConnection } from '../../Services/CheckConnections'
import Context from '../../Global/context'
import { Auth } from 'aws-amplify'

export const SideMenu = props => {

    const { state, actions } = useContext(Context)
    const dynamicStyles = {
        transform: state.dynamic_styles.side_menu_translation,
        width: '75%',
        height: '100vh',
        position: 'fixed',
        left: 0, top: 0,
        transition: 'ease-in-out 200ms',
        zIndex: 10,
    }
    const [localUser, setLocalUser] = useState({ u: "" })

    useEffect(() => {
        CheckConnection().then(res => setLocalUser({ u: res.username }))
    }, [])

    const CloseSideMenu = () => {
        actions({
            type: "setState",
            payload: { ...state, dynamic_styles: { side_menu_translation: "translateX(-100%)" } }
        })
    }

    const HandleOptionSelect = option => {
        CloseSideMenu()
        setTimeout(() => navigate(option), 200)
    }



    const CloseSession = () => {
        props.init_animation()
        CloseSideMenu()
        setTimeout(() => {
            Auth.signOut()
            navigate('login')
            props.end_animation()
        }, 1000)
    }

    return (
        <div style={dynamicStyles}>
            <SideMenuWrapper>
                <SideMenuHeader>
                    <SideMenuHeaderTitle> Flipsy </SideMenuHeaderTitle>
                    <SideMenuCloseIcon onClick={CloseSideMenu} > <Icon type="left-circle" /> </SideMenuCloseIcon>
                </SideMenuHeader>

                <SectionUser>
                    <Circle> <SideMenuUserImg src={require('../../Assets/user.svg')} /> </Circle>
                    <UserInfo>
                        <UserName> {localUser.u} </UserName>
                        <UserSettings> <UserSettingsMessage> Account Settings </UserSettingsMessage> <Icon style={{ fontSize: '1.2em' }} type="setting" /> </UserSettings>
                    </UserInfo>
                </SectionUser>


                <SectionState>
                    <SectionStateTitle> Better scored flashcard group </SectionStateTitle>
                    <BetterFCGContainer>
                        <BetterFCGImg src={require('../../Assets/atom.svg')} />
                        <BetterFCGMessage> React notes </BetterFCGMessage>
                    </BetterFCGContainer>
                    <FCGScore> 98.8% </FCGScore>
                </SectionState>

                <SectionAccountTitle> MY ACCOUNT </SectionAccountTitle>

                <SectionAccountContainer>
                    <AccountListItem onClick={() => HandleOptionSelect('createfcg')}> <Icon style={{ fontSize: '1.5em', margin: '0' }} type="file-add" /> <AccountItemTitle>Create new Flashcard Group</AccountItemTitle> </AccountListItem>
                    <AccountListItem onClick={() => HandleOptionSelect('fcgroups')}> <Icon style={{ fontSize: '1.5em', margin: '0' }} type="folder-add" /> <AccountItemTitle>My Flashcard Groups</AccountItemTitle> </AccountListItem>
                    <AccountListItem> <Icon style={{ fontSize: '1.5em', margin: '0' }} type="deployment-unit" /> <AccountItemTitle>Friends</AccountItemTitle> </AccountListItem>
                </SectionAccountContainer>

                <SectionSession onClick={CloseSession}>
                    <Icon style={{ fontSize: '1.5em', margin: '0' }} type="logout" />
                    <CloseSessionMessage> Cerrar Sesión </CloseSessionMessage>
                </SectionSession>



            </SideMenuWrapper>
        </div>
    )
}