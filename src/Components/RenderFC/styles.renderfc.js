import styled from 'styled-components'

export const FCRenderWrapper = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
`

export const FCSingleResult = styled.div`
    width: 100%;
    height: 14vh;
    background: #1fc0e0;
    box-shadow: 0 1px 8px #b8b8b8;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
    border-radius: 8px;
`

export const AddNewFC = styled.div`
    width: 100%;
    height: 14vh;
    border: 1px dashed #909090;
    color: #909090;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1em;
    border-radius: 8px;
`

export const AddNewTitle = styled.p`
    font-size: 1em;
    margin: 0;
`

export const FCFront = styled.p`
    color: white;
    font-weight: bolder;
    margin: 0;
    font-size: .8em;
`

export const NothingToShowWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: #909090;
`

export const NothingToShowMessage = styled.p`
    width: 100%;
    font-size: 1.5em;
    color: #909090;
    margin: 0;
    grid: none;
    text-align: center;
    position: relative;
`

export const Button = styled.button`
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
    margin-top: 2em;
`