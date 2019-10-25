import styled from 'styled-components'

export const FCWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: #f0f0f0;
    overflow: hidden;    
    padding: 1em;
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    font-family: 'Montserrat', sans-serif !important;
    display: grid;
    grid-template-rows: .4fr 4fr;
    grid-gap: 1em;
`

export const FCBox = styled.section`
    padding: 1em;
    background: white;
    width: 100%;
    box-shadow: 0 1.5px 0 #909090;
    position: relative;
    overflow: scroll;
`

export const FCTitle = styled.h4`
    margin: 0;
    font-size: 1.4em;
    color: #0d678f;
    font-weight: bolder;
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