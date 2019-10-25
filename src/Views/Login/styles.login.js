import styled from 'styled-components'
// import { zoom_in_out } from '../../Global/GlobalStyles'


export const LoginWrapper = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    background: whitesmoke;
    color: #101010;
`

export const InputsBox = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 25vh;
    padding: 0 1em 1em 1em;

`

export const MainTitle = styled.h2`
`

export const Subtitle = styled.p`
    font-weight: bolder;
`
export const BottomMessage = styled.p`
    position: absolute;
    width: 100%;
    bottom: 10%;
    font-size: .9em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-height: 500px) {
        bottom: -15%;
    }
`

export const Linked = styled.a`
    color: blue;
`

export const FloatingButton = styled.div`
    position: absolute;
    z-index: 100;
    bottom: 22%;
    @media (max-height: 500px) {
        bottom: 0;
    }
`