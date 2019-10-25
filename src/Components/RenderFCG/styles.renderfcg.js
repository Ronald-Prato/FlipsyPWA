import styled from 'styled-components'

export const FCGRenderWrapper = styled.div`
    padding: 1em;
    display: grid; 
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 1em;
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    font-family: 'Montserrat', sans-serif !important;
`

export const FCGImageWrapper = styled.div`
    width: 100%;
    height: 10vh;
    background: #1fc0e0;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 1px 8px #b8b8b8;
    border-radius: 8px;
    position: relative;
`

export const FCGTitle = styled.p`
    font-size: 1.1em;
    margin: 0;
    color: white;
    font-weight: bolder;
    position: absolute;
    bottom: 5%; right: 5%;
`

export const FCGRetentive = styled.p`
    font-size: 1em;
    margin: 0;
    color: white;
    font-weight: bolder;
    position: absolute;
    top: 5%; left: 5%;
`