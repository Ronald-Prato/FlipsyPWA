import styled from 'styled-components'

export const SignUpWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw; 
    height: 100vh;
    overflow: hidden;
    font-family: 'Montserrat', sans-serif;
    background: whitesmoke;
    color: #101010;
`

export const Title = styled.h2`
    margin: 0 0 .5em 0;
`

export const Subtitle = styled.p`
    margin-bottom: .1em;
    margin-top: 1em;
    font-weight: bolder;
`

export const ButtonsWrapper = styled.section`
    margin-top: 1.5em;
    display: grid;
`

export const LoginMessage = styled.a`
    margin-top: 2em;
`