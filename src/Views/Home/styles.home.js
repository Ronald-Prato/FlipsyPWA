import styled from 'styled-components'

export const HomeWrapper = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    font-family: 'Montserrat', sans-serif;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: #f0f0f0;
`

export const HomeHeader = styled.section`
    width: 100vw;
    padding: 1em .6em;
    box-shadow: 0 1px 6px #cfcfcf;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;  
    background: white;
    color: #323232;
`

export const HomeTitle = styled.h4`
    margin: 0;
    font-weight: bolder;
    font-size: 1.1em;
    text-align: center;
    align-self: center;
    color: #323232;
`

export const Cirle = styled.div`
   
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    justify-self: center;
`

export const HomeContentWrapper = styled.section`
    width: 100vw !important;
    height: 85%;
    display: grid;
    grid-template-rows: .35fr 2fr 2fr;
    grid-gap: 1em;
    padding: .6em;
`

export const SectionNewFC = styled.div`  
    color: #c2c2c2;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    box-shadow: 0 1.5px 0 #909090;
`

export const NewFCTitle = styled.p`
    font-weight: bolder;
    font-size: 1.1em;
    text-align: center;
    margin: 0;
`

export const SectionRecentFC = styled.section`
    background: white;
    box-shadow: 0 1.5px 0 #909090;
    padding: 1em;
    height: 98%;
    
`

export const SectionFCTitle = styled.p`
    font-weight: bolder;
    font-size: 1.1em;
    margin: 0;
    color: #404040;
`

export const SectionMenu = styled.section`
    background: white;
    width: 100vw;
    height: 3.2em;
    position: fixed;
    bottom: 0; left: 0;
    /* z-index: 1; */

    display: grid;
    grid-template-columns: repeat(5, 1fr);
`


export const Centered = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
`

export const FCGList = styled.div`
    width: 100%; height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    font-size: 1.2em;
    color: #909090;
`

export const NoFCG = styled.h4`
    color: #909090;
    font-weight: bolder;
    margin: 0;
`