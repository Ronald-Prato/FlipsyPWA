import React, { useState, useContext } from 'react'
import { navigate } from '@reach/router'
import { LoginWrapper, InputsBox, MainTitle, Subtitle, BottomMessage, Linked, FloatingButton } from './styles.login'
import { ImgWrapper, Input, LoadingWrapper, LoadingBox, Button } from '../../Global/GlobalStyles'
import { Icon } from 'antd'
import { Auth } from 'aws-amplify'
import Context from '../../Global/context'

export const Login = () => {

    const { state, actions } = useContext(Context)
    const [localState, setLocalState] = useState({ un: "", ps: "" })
    const [showLoading, setShowLoading] = useState(false)

    const LoginHandler = async () => {
        setShowLoading(true)
        try {
            let user = await Auth.signIn(localState.un, localState.ps)
            navigate('home')
            setShowLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const Signout = () => Auth.signOut()

    return (
        <LoginWrapper>
            <ImgWrapper src={require('../../Assets/Flipsy-FullColor.svg')} alt="" />
            <MainTitle>Welcome to Flipsy</MainTitle>
            <InputsBox>
                <div>
                    <Subtitle>Username</Subtitle>
                    <Input onChange={e => setLocalState({ ...localState, un: e.target.value })} />
                </div>

                <div>
                    <Subtitle>Password</Subtitle>
                    <Input type="password" onChange={e => setLocalState({ ...localState, ps: e.target.value })} />
                </div>
            </InputsBox>

            <FloatingButton> <Button onClick={LoginHandler}> Sign In </Button> </FloatingButton>
            {/* <Button onClick={Signout}> Sign out </Button> */}

            <BottomMessage>Don't you have an account ? <Linked onClick={() => navigate('signup')}> Sign up here </Linked> </BottomMessage>

            {
                showLoading &&
                <LoadingWrapper>
                    <LoadingBox>
                        <Icon type="loading" />
                    </LoadingBox>
                </LoadingWrapper>
            }

        </LoginWrapper>
    )
}