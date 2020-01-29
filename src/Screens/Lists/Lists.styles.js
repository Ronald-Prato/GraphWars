import styled, { keyframes } from 'styled-components'

export const CharacterMainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: #101010;
    padding: 2em;

    display: grid; 
    grid-template-columns: repeat(16, 1fr);
    grid-template-rows: repeat(12, 1fr);
    grid-gap: 2em;
`

export const Title = styled.h2`
    color: white;
    font-weight: lighter;
`


export const CharacterInput = styled.div`
    grid-column: 1/6;
    grid-row: 1/2;
`

export const CharactersList = styled.div`
    grid-column: 1/6;
    grid-row: 2/7;
    margin-top: 2em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;

`

export const SingleCharacter = styled.p`
    padding: 1.5em;
    box-shadow: 0 3px 10px black, inset 0 -2px 0 0 purple;
    color: white;
    height: 3.2em;
    display:flex;
    justify-content: left;
    align-items: center;
    width: 100%;
    cursor: pointer;
    transition: ease-in-out 200ms;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 12px black, inset 0 -2px 0 0 purple;
    }
`

export const CharacterSearchInput = styled.div`

`

const left_right = keyframes`
    from { transform: translateX(-100%) }
    to { transform: translateX(0) }
`

export const LeftContainer = styled.div`
    grid-column: 1/7;
    grid-row: 1/12;
    width: 100%;
    box-shadow: 0 10px 12px black, inset 0 -2px 0 0 purple;
    padding: 2em;
    animation: ${left_right} 300ms ease-in-out forwards; 
`

export const PaginationContainer = styled.div`
    width: 10%;
    grid-column: 1/6;
    position: absolute;
    bottom: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const PageNumber = styled.p`
    color: #db03fc;
    font-weight: bolder;
    margin: 0;
`

const up_down = keyframes`
    from { transform: translateY(-100%) }
    to { transform: translateY(0) }
`

export const CharacterInfo = styled.div`
    grid-column: 8/17;
    grid-row: 1/6;
    box-shadow: 0 10px 12px black, inset 0 -2px 0 0 purple;
    padding: 1em;

    display: flex;
    justify-content: space-around;
    align-items: center;
    animation: ${up_down} 200ms ease forwards;
`

export const CharacterInfoLoading = styled.div`
    grid-column: 8/17;
    grid-row: 1/6;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
`

export const SubTitle = styled.p`
    color: purple;
`



export const CharacterName = styled.p`
    color: white; 
    font-size: 2em;
`

export const InfoGrid = styled.p`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2em;
`


export const LeftPart = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 2fr;
`
export const RightPart = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
`


export const Birthdate = styled.p`
    color: white;
`

export const HomePlanet = styled.p`
    color: white; 
    text-decoration: underline;
    cursor: pointer;

`

export const EyeColor = styled.p`
    color: white; 
    
`

export const Gender = styled.p`
    color: white; 
    
`

export const Height = styled.p`
    color: white; 
    
`

export const HairColor = styled.p`
    color: white; 
`

export const Mass = styled.p`
    color: white; 
    
`

export const SkinColor = styled.p`
    color: white; 
`




// Planet Info => => => => 

const down_up = keyframes`
    from { transform: translateY(100%) }
    to { transform: translateY(0) }
`


export const PlanetInfo = styled.div`
    grid-column: 8/17;
    grid-row: 6/12;
    box-shadow: 0 10px 12px black, inset 0 -2px 0 0 purple;
    padding: 1em;
    transition: ease-in-out 300s;
    display: flex;
    justify-content: space-around;
    align-items: center;
    animation: ${down_up} 300ms forwards;
    box-sizing: border-box;
`

export const PlanetInfoMain = styled.div`
    grid-column: 8/17;
    grid-row: 1/6;
    box-shadow: 0 10px 12px black, inset 0 -2px 0 0 purple;
    padding: 1em;
    transition: ease-in-out 300s;
    display: flex;
    justify-content: space-around;
    align-items: center;
    animation: ${up_down} 300ms forwards;
    box-sizing: border-box;
`

export const PlanetInfoGrid = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr;
    margin-left: 10%;
    
`
export const PlanetInfoLoading = styled.div`
    grid-column: 7/17;
    grid-row: 6/12;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PlanetInfoLoadingMain = styled.div`
    grid-column: 7/17;
    grid-row: 1/6;
    display: flex;
    justify-content: center;
    align-items: center;
`



export const PlanetName = styled.p`
    font-size: 2em;
    color: white;
    margin-left: 8%;

`

export const InfoContent = styled.p`
    color: white; 
    margin-left: .4em;
`





// Other lists => => => => 

export const AnotherLists = styled.div`
    grid-column: 14/17;
    grid-row: 1/6;
    box-shadow: 0 10px 12px black, inset 0 -2px 0 0 purple;
    padding: 1em;

`

export const AnotherListsTitle = styled.ul`
    color: purple;
    font-size: 1.2em;
`

export const AnotherListsOption = styled.li`
    color: purple;
    display:flex;
    justify-content: left;
    align-items: center;
    width: 100%;
    cursor: pointer;
    margin-top: 1em;
    font-weight: bolder;
`

export const CenterText = styled.li`
    display:flex;
    flex-direction: column;
    justify-content: center;
    height: 60%;
`





// Movies => => => 


export const FilmInfoContainer = styled.div`
    grid-column: 7/17;
    grid-row: 1/12;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
    
`

const openning_message = keyframes`
    from { transform: translateY(65%); }
    to { transform: translateY(-100%); }
`

export const OpeningMessageContainer = styled.div`
    grid-column: 3/5;
    grid-row: 1/4;
    width: 100%;
    transform: perspective(300px) rotateX(50grad);
    /* background: gray; */
    overflow: hidden; 
    

`

export const OpeningMessage = styled.p`
    color: #ffbf00;
    font-weight: bolder;
    text-align: justify;
    font-size: 1.25rem;
    transform: translateY(100%);
    animation: ${openning_message} 30s linear infinite;
`

export const LoadingFilm = styled.div`
    grid-column: 7/17;
    grid-row: 1/13;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
`

export const FilmInfo = styled.div`
    grid-column: 1/12;
    grid-row: 5/16;
    box-shadow: 0 10px 12px black, inset 0 -2px 0 0 purple;
    padding: 2em;
    animation: ${down_up} 150ms linear forwards;

    display: grid;
    grid-template-columns: repeat(12, 1fr);
`

export const FilmName = styled.p`
    grid-column: 2/5;
    align-self:center;
    font-size: 1.4em;
    /* font-weight: bolder; */
    color: white;
`

export const SubInfo = styled.div`
    grid-column: 6/13;
    display: grid;
    align-self:center;
    grid-template-columns: 1fr 2fr 1fr 2fr;
    grid-template-rows: 1fr 1fr;
    margin-left: 1em;
`


