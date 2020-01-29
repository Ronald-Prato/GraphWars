import styled from 'styled-components'

export const HomeMainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: #101010;
`

export const LogoContainer = styled.img`
    width: 20%;
    position: absolute;
    top: 15%; left:0; right: 0;
    margin: auto;
    z-index: 10;
`



const GeneralButtons = `
    padding: 1.5em;
    box-shadow: 0 3px 10px black, inset 0 -2px 0 0 purple;
    color: white;
    height: 3.2em;
    display:flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: ease-in-out 200ms;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 12px black, inset 0 -2px 0 0 purple;
    }
`

export const StartContainer = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 60%; left:0; right: 0;
    margin: auto;
    z-index: 10;
`

export const StartButton = styled.div`
    ${GeneralButtons}
`


export const Characters = styled.div`
    grid-column: 3/5;
    grid-row: 5/6;
    ${GeneralButtons}
`

export const Movies = styled.div`
    grid-column: 9/11;
    grid-row: 5/6;
    ${GeneralButtons}

`

export const Language = styled.div`
    grid-column: 6/8;
    grid-row: 10/11;
    ${GeneralButtons}
`