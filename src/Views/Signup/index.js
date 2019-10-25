import React, { useState, useContext } from 'react'
import { navigate } from '@reach/router'
import { SignUpWrapper, Title, Subtitle, ButtonsWrapper, LoginMessage } from './styles.signup'
import { ImgWrapper, Input, LoadingWrapper, LoadingBox, Button } from '../../Global/GlobalStyles'
import { Auth } from 'aws-amplify'
import { Icon } from 'antd'
import Context from '../../Global/context'

export const SignUp = () => {

    const { state, actions } = useContext(Context)
    const [localState, setLocalState] = useState({ un: "", em: "", ps: "" })
    const [showLoading, setShowLoading] = useState(false)

    const SignUpHandler = async () => {
        setShowLoading(true)
        try {
            await Auth.signUp({
                username: localState.un,
                password: localState.ps,
                attributes: {
                    email: localState.em
                }
            })
            setShowLoading(false)
            SetInGlobalState(localState.un, localState.em, localState.ps)
            navigate('verification')
        } catch (error) {
            console.log(error)
            setShowLoading(false)
        }
    }

    const SetInGlobalState = (u, e, p) =>
        actions({
            type: 'setState',
            payload: { ...state, user_credentials: { nickname: u, email: e, password: p } }
        })

    return (
        <SignUpWrapper>
            <ImgWrapper src={require('../../Assets/Flipsy-FullColor.svg')} alt="" />
            <Title> Sign up </Title>
            <div>
                <Subtitle> Username </Subtitle>
                <Input onChange={e => setLocalState({ ...localState, un: e.target.value })} />
            </div>

            <div>
                <Subtitle> Email </Subtitle>
                <Input onChange={e => setLocalState({ ...localState, em: e.target.value })} />
            </div>

            <div>
                <Subtitle> Password </Subtitle>
                <Input type='password' onChange={e => setLocalState({ ...localState, ps: e.target.value })} />
            </div>

            <ButtonsWrapper>
                <Button onClick={SignUpHandler}> Sign up </Button>
            </ButtonsWrapper>

            <p style={{ marginTop: '2em ' }}> or <LoginMessage onClick={() => navigate('login')} > Login here </LoginMessage> </p>

            {
                showLoading &&
                <LoadingWrapper>
                    <LoadingBox>
                        <Icon type="loading" />
                    </LoadingBox>
                </LoadingWrapper>
            }

        </SignUpWrapper>
    )
}