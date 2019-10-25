import styled from 'styled-components'

export const CreateFCGWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: #f0f0f0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
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
    width: 100%;
    color: #0d678f;
`


export const InputContainer = styled.div`
    margin-top: 2em;
    width: 100%;
`

export const InputTitle = styled.p`
    margin: 0;
    font-size: 1.2em;
    font-weight: bolder;
`

export const SectionCreateTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    box-shadow: 0 1.5px 0 #909090;
    padding: 1em;
    color: steelblue;
    width: 100%;
    height: 16vh;
`

export const CreateTitle = styled.h2`
    font-weight: lighter;
    font-size: 1.6em;
    color: steelblue;
    margin-top: .5em;
`

export const FCGAccessContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
    width: 50%;
    justify-self: flex-start;
`

export const SetLeft = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;   
    margin-top: 2em ; 
`

export const AccessOption = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    padding: .5em;
    font-size: 1.2em;
    border: .5px solid steelblue;
    border-radius: 5px;
    margin-top: .5em;
`

export const AccessOptionMessage = styled.p`
    font-weight: bolder;
    margin: 0 0 0 .5em;
`

export const FinalButtonsContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    bottom: 5%;
    left: 0;
    justify-self: center;
`

export const PrevisualizedFCG = styled.section`
    width: 90%;
    height: 25%;
    margin-top: 2em; 
    display: flex;
    justify-content: center;
    align-items: center;   
    /* border: 1px solid red; */
    position: relative;
`

export const BoxImg = styled.img`
    width: 65%;
`

export const BoxTitle = styled.p`
    position: absolute;
    margin: auto;
    bottom: 3em;
    font-size: 1.2em;
    color: steelblue;
    font-weight: bolder;
`

export const BoxCategory = styled.p`
    position: absolute;
    margin: auto;
    bottom: 1em; right: 20%;
    font-size: 1em;
    color: #7b7ca8;
    font-weight: bolder;
`