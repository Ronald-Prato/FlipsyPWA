import React, { useState, useContext } from 'react'
import { navigate } from '@reach/router'
import InputMask from 'react-input-mask'
import { VerificationWrapper, LoginMessage } from './styles.verification'
import { ImgWrapper, Button, LoadingWrapper, LoadingBox } from '../../Global/GlobalStyles'
import { Icon } from 'antd'
import { Auth } from 'aws-amplify'
import Context from '../../Global/context'
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks'
import { CheckConnection } from '../../Services/CheckConnections'


export const Verification = () => {

    const { state, actions } = useContext(Context)
    const [code, setCode] = useState("")
    const [showLoading, setShowLoading] = useState(false)
    const MaskStyled = {
        width: '50%',
        border: 'none',
        padding: '0 1em',
        boxShadow: '0 1.5px 0 #909090',
        outline: 'none',
        fontSize: '2em',
        textAlign: 'center',
        transition: 'ease -in -out 200ms',
        border: '.5px solid gray'
    }
    const [CreateUserInNeo4j] = useMutation(gql` 
        mutation Create($id: ID!, $nickname: String!, $email: String!, $name: String!, $lastName: String!, $birthDate: String!, $gender: String!, $emailNotifications: Boolean!){
            CreateUSER(
                idUser: $id, nickname: $nickname, email: $email,
                name: $name, lastName: $lastName, birthDate: $birthDate,
                gender: $gender, emailNotifications: $emailNotifications
            ){idUser nickname email} 
        }
    `)

    const VerificationHandler = async () => {
        setShowLoading(true)
        Auth.confirmSignUp(state.user_credentials.nickname, code.replace(/ /g, ""))
            .then(() => LoginUser(state.user_credentials))
            .catch(error => {
                console.log(error)
                setShowLoading(false)
            })
    }

    const CreateUser = id => {
        let user = state.user_credentials
        try {
            CreateUserInNeo4j({
                variables: {
                    id: id, nickname: user.nickname, email: user.email,
                    name: "-", lastName: "-", birthDate: "-", gender: "-",
                    emailNotifications: true
                }
            }).then(res => {
                console.log(res.data)
                navigate('home')
            })
        } catch (error) { console.log(error) }
    }

    const LoginUser = async user => {
        try {
            await Auth.signIn(user.nickname, user.password)
            GetUserUID()
        } catch (error) {
            console.log(error)
        }
        // CreateUser(state.user_credentials)
    }

    const GetUserUID = async () => {
        CheckConnection().then(res => CreateUser(res.attributes.sub))
    }


    return (
        <VerificationWrapper>
            <ImgWrapper src={require('../../Assets/Flipsy-FullColor.svg')} alt="" />
            <h2>Enter your verification code</h2>
            <InputMask value={code} onChange={e => setCode(e.target.value)} style={MaskStyled} mask="9 9 9 9 9 9" maskChar="" />
            <Button onClick={VerificationHandler} > Submit </Button>

            <p style={{ marginTop: '2em ' }}> or <LoginMessage onClick={() => navigate('login')} > Login here </LoginMessage> </p>

            {
                showLoading &&
                <LoadingWrapper>
                    <LoadingBox>
                        <Icon type="loading" />
                    </LoadingBox>
                </LoadingWrapper>
            }
        </VerificationWrapper>
    )
}