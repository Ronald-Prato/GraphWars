import styled from 'styled-components'

export const HeaderMainContainer = styled.div`
    width: 100%;
    position: fixed;
    left: 0; top: 0;
`

export const HeaderList = styled.div`
    display: grid; 
    grid-template-columns: 1fr repeat(3, 1fr);
    background: rgba(0, 0, 0, .4 );
`

export const HeaderListItem = styled.p`
    padding: 1.5em;
    color: white;
    margin: 0;
    transition: ease-in-out 200ms;
    text-align: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        text-shadow: 0 8px 10px purple;
    }
`