import styled from 'styled-components'


export const FCGWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: #f0f0f0;
    padding: 1em;
    display: grid; 
    grid-template-rows: .2fr 2fr;
    grid-gap: 1.5em;
`

export const MyFCGBox = styled.section`
    background: white;
    padding: 1em;
    box-shadow: 0 1.5px 0 #909090;  
    position: relative;
`

export const FCGTitle = styled.p`
    font-size: 1.4em;
    color: #606060;
    margin: 0;
`

export const LocalLoadingWrapper = styled.section`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .3);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LocalLoadingBox = styled.div`
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