import styled from 'styled-components'

export const CreateFCWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: #f0f0f0;
    padding: 1em;
    position: relative;
    display: grid;
    grid-template-rows: .5fr 4fr 4fr 1fr;
`

export const FCInputsContainer = styled.div`
    width: 100%;
    
`

export const CreateFCBox = styled.section`
    padding: 1em;
    background: white;
    width: 100%;
    box-shadow: 0 1.5px 0 #909090;
    margin-bottom: 1em;
`

export const CreateFCTitle = styled.p`
    margin: 0;
    font-weight: bolder;
    color: #505050;
`

export const FCGroupName = styled.a`
    color: steelblue;
`

export const CreateFCSubtitle = styled.p`
    margin: 1em 0 0 0;
    color: #505050;
    &:first-child {
        margin: 0;
    }
`

export const FCPreviewTitle = styled.p`
    color: #505050;
    font-size: 1.1em;
    font-weight: bolder;
`

export const LocalInput = styled.input`
    outline: none;
    border: none;
    box-shadow: 0 1.5px 0 #909090;
    font-size: 1em;
    padding: .5em 1em;
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    font-family: 'Montserrat', sans-serif !important;
    font-weight: bolder;
    width: 100%;
    color: #0d678f;
    overflow: scroll;
`

export const LocalButton = styled.button`
    outline: none;
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
    width: 92%;
    position: absolute;
    bottom: 3%;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
`

export const FCPreview = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    font-family: 'Montserrat', sans-serif !important;
    background: #41abd9;
    border-radius: 8px;
    width: 350px;
    word-wrap: break-word;
    height: 28vh;
    padding: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px #505050;
    position: relative;
`

export const LocalTextArea = styled.textarea`
    outline: none;
    border: none;
    box-shadow: 0 1.5px 0 #909090;
    font-size: 1em;
    padding: .5em 1em;
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    font-family: 'Montserrat', sans-serif !important;
    font-weight: bolder;
    width: 100%;
    color: #0d678f;
`

export const FCText = styled.p`
    font-size: 1.2em;
    font-weight: bolder;
    text-align: center;
    color: white;
    width: 100%;
    white-space: initial;
    margin: 0;
`

export const SideIndicator = styled.p`
    font-weight: bolder;
    font-size: 1em;
    position: absolute;
    top: 4%;
    left: 4%;
    color: white;
`