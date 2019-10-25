import styled from 'styled-components'


export const SideMenuWrapper = styled.div`
    height: 100vh;
    transition: ease-in-out 500ms;
    background: #e0e0e0;
`

export const SideMenuCloseIcon = styled.div`
    position: absolute;
    right: 5%;
    font-size: 1.5em;

`

export const SideMenuHeader = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    padding: .5em;
`

export const SideMenuHeaderTitle = styled.p`
    font-size: 1.3em;
    font-weight: bolder;
    margin: 0;
`

export const SectionUser = styled.section`
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding: 1.2em .5em;
    grid-gap: 1em;
`

export const Circle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SideMenuUserImg = styled.img`
    width: 75%;

`

export const UserInfo = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

export const UserName = styled.p`
    font-size: 1.3em;
    font-weight: bolder;
    margin: 0 0 .2em 0;
`

export const UserSettings = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`


export const UserSettingsMessage = styled.p`
    margin: 0;
    font-size: .85em;
`

export const SectionState = styled.section`
    background: white;
    padding: 1em;
    position: relative;
`

export const SectionStateTitle = styled.p`
    font-size: 1em;
    font-weight: bolder;
`
export const BetterFCGImg = styled.img`
    width: 100%;
`

export const BetterFCGContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding: 1.2em .5em;
    grid-gap: 1em;
    background: #1fc0e0;
    border-radius: 8px;
    box-shadow: 0 1px 8px #cecece;
`

export const FCGScore = styled.p`
    font-weight: bolder;
    position: absolute;
    bottom: 2%; right: 8%;
    color: white;
`

export const BetterFCGMessage = styled.p`
    font-weight: bolder;
    align-self: center;
    margin: 0 0 0 1em;
    color: white;
`

export const SectionAccountTitle = styled.p`
    font-weight: lighter;
    color: #606060;
    margin: 1em;
    text-align: start;
`

export const SectionAccountContainer = styled.section`
    
`

export const AccountListItem = styled.div`
    background: white;
    width: 100%;
    box-shadow: 0 .5px 1px #909090;
    display: grid;
    grid-template-columns: .5fr 4fr;
    padding: 1em .5em;
    transition: ease-in-out 300ms;
    &:active {
        background: rgba(0,0,0,.2);
    }
`

export const AccountItemTitle = styled.h4`
    font-size: 1.1em;
    margin: 0 0 0 .5em;
    align-self: center;
`

export const SectionSession = styled.section`
    background: tomato;
    width: 100%;
    display: grid;  
    grid-template-columns: .5fr 4fr;
    padding: 1em .5em;
    position: absolute;
    bottom: 0; left: 0;
    color: white;
`

export const CloseSessionMessage = styled.p`
    margin: 0 0 0 .5em;
    color: white;
    align-self: center;
`