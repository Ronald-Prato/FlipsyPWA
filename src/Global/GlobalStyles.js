import styled, { keyframes } from 'styled-components'

export const zoom_in_out = keyframes`
    0% {transform: scale(1)}
    50% {transform: scale(1.1)}
    100% {transform: scale(1)}
`

export const ImgWrapper = styled.img`
    width: 40%;
    margin: -4em 0 1em 0;
    /* animation: ${zoom_in_out} 1000ms infinite; */
`
export const Input = styled.input`
    outline: none;
    border: none;
    box-shadow: 0 1.5px 0 #909090;
    font-size: 1em;
    padding: .5em 1em;
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    font-family: 'Montserrat', sans-serif !important;
    font-weight: bolder;
    width: 70vw;
    color: #0d678f;
`

export const LoadingWrapper = styled.section`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
`

export const LoadingBox = styled.div`
    width: 3em;
    height: 3em;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 1.5px 0 #909090;
    font-size: 1.6em;
    color: #41abd9;
`

export const Button = styled.button` 
    outline: none;
    margin: .6em;
    border: none;
    font-size: 1.2em;
    color: white;
    padding: .4em;
    font-weight: bolder;
    background: #41abd9;
    box-shadow: 0 1.5px 0 steelblue;
    transition: ease-in-out 100ms;
    &:active {
        background: steelblue;
    }
`