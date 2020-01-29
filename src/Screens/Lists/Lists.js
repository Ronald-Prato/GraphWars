import React, { useState, useEffect } from 'react'
import { Input, Icon, Dropdown, Menu } from 'antd'
import * as st from './Lists.styles'
import '../../OcasionalStyles.css'
import { API, graphqlOperation } from 'aws-amplify'
import * as mutation from '../../graphql/mutations'
import * as query from '../../graphql/queries'
import { TweenLite } from "gsap";

export const Lists = () => {
  const { Search } = Input;
  const [SearchedCharacter, setSearchedCharacter] = useState("")
  const [SearchOption, setSearchOption] = useState("ch")
  const [Characters, setCharacters] = useState([])
  const [PageNumber, setPageNumber] = useState(1)
  const [StartPoint, setStartPoint] = useState(0)
  const [TotalPages, setTotalPages] = useState(0)
  const [SelectedCharacter, setSelectedCharacter] = useState({})
  const [SelectedPlanet, setSelectedPlanet] = useState({})
  const [HasSelected, setHasSelected] = useState("")
  const [LocalHomeWorld, setLocalHomeWorld] = useState("")
  const [ShowPlanetOption, setShowPlanetOption] = useState("")
  const [DownAnimation, setDownAnimation] = useState({})
  const [SelectedFilm, setSelectedFilm] = useState({})
  const [Intro, setIntro] = useState(React.createRef())

  useEffect(() => {
    TweenLite.to(
      Intro.current,
      4.5,
      { opacity: 1, delay: 1 }
    );
    TweenLite.to(
      Intro.current,
      1.5,
      { opacity: 0, delay: 5.5 }
    );
    return GetCharacters()
  }, [])

  const menu = (
    <Menu>
      <Menu.Item onClick={() => ChangeDataRequest('ch')}>
        <a>Characters</a>
      </Menu.Item>
      <Menu.Item onClick={() => ChangeDataRequest('pl')}>
        <a>Planets</a>
      </Menu.Item>
      <Menu.Item onClick={() => { ChangeDataRequest('fl') }}>
        <a>Films</a>
      </Menu.Item>
    </Menu>
  )
  const ChangeDataRequest = async option => {
    setSearchOption(option)
    setCharacters([])
    setSelectedFilm({})
    setHasSelected("")
    setShowPlanetOption("")
    setPageNumber(1)
    setStartPoint(0)
    option === "ch" ?
      await API.graphql(graphqlOperation(query.listCharacters))
        .then(res => {
          setCharacters(res.data.listCharacters.items)
          setTotalPages(parseInt(Characters.length / 10))
        })
      : option === "pl" ?
        await API.graphql(graphqlOperation(query.listPlanets))
          .then(res => {
            setCharacters(res.data.listPlanets.items)
            setTotalPages(parseInt(Characters.length / 10))
          })
        :
        await API.graphql(graphqlOperation(query.listFilms))
          .then(res => {
            setCharacters(res.data.listFilms.items)
            setTotalPages(parseInt(Characters.length / 10))
          })
  }

  const GetCharacters = async () => {
    await API.graphql(graphqlOperation(query.listCharacters))
      .then(res => {
        setCharacters(res.data.listCharacters.items)
        setTotalPages(parseInt(Characters.length / 10))
      })
  }

  const GetPreviousCharactersPage = async () => {
    if (PageNumber > 1) {
      setPageNumber(PageNumber - 1)
      setStartPoint(StartPoint - 10)
    }

  }

  const GetNextCharactersPage = async () => {
    if (PageNumber < Characters.length / 10) {
      setPageNumber(PageNumber + 1)
      if (PageNumber === TotalPages - 1) {
        setStartPoint(StartPoint + Characters.length)
      } else {
        setStartPoint(StartPoint + 10)
      }
    }
  }

  const SetCharacterInfo = async character => {
    setHasSelected("loading")
    setSelectedCharacter(character)
    setShowPlanetOption("")

    await API.graphql(graphqlOperation(query.getPlanet, {
      id: character.homeworld
    }))
      .then(res => setLocalHomeWorld(res.data.getPlanet.name))
      .then(() => setHasSelected("done"))
  }


  const SetPlanetInfo = async planet => {
    setHasSelected("loading")
    setSelectedPlanet(planet)
    setShowPlanetOption("")
    setTimeout(() => setHasSelected("done"), 350)

    // await API.graphql(graphqlOperation(query.getPlanet, {
    //   id: character.homeworld
    // }))
    //   .then(res => setLocalHomeWorld(res.data.getPlanet.name))
    //   .then(() => setHasSelected("done"))
  }

  const GetPlanetInfo = async planet_id => {
    setShowPlanetOption("loading")
    await API.graphql(graphqlOperation(query.getPlanet, { id: planet_id }))
      .then(res => setSelectedPlanet(res.data.getPlanet))
      .then(() => setShowPlanetOption("done"))
  }

  const SetFilmInfo = async film => {
    setHasSelected("loading")
    setSelectedFilm(film)
    setTimeout(() => setHasSelected("done"), 300)

  }

  return (
    <st.CharacterMainContainer>
      <st.LeftContainer>
        <st.CharacterInput>

          <Dropdown overlay={menu}>
            <st.Title onClick={() => console.log(SearchedCharacter)}>
              {SearchOption === "ch" ? "Characters" : SearchOption === "pl" ? "Planets" : "Films"}
              <Icon style={{ marginLeft: '1em' }} type="down" />
            </st.Title>

          </Dropdown>


          <st.CharacterSearchInput>
            <Search
              placeholder="Busca algún personaje"
              onChange={e => setSearchedCharacter(e.target.value)}
            />
          </st.CharacterSearchInput>
        </st.CharacterInput>

        {
          SearchOption === "ch" ?
            <st.CharactersList>
              {
                !SearchedCharacter.length ?
                  Characters.slice(StartPoint, StartPoint + 10).map(x =>
                    <st.SingleCharacter onClick={() => SetCharacterInfo(x)}> {x.name} </st.SingleCharacter>
                  )
                  :
                  Characters.filter(x => x.name.toLowerCase().includes(SearchedCharacter)).slice(0, 10).map(x =>
                    <st.SingleCharacter onClick={() => SetCharacterInfo(x)}> {x.name} </st.SingleCharacter>
                  )
              }
            </st.CharactersList>
            : SearchOption === "pl" ?
              <st.CharactersList>
                {
                  !SearchedCharacter.length ?
                    Characters.slice(StartPoint, StartPoint + 10).map(x =>
                      <st.SingleCharacter onClick={() => SetPlanetInfo(x)}> {x.name} </st.SingleCharacter>
                    )
                    :
                    Characters.filter(x => x.name.toLowerCase().includes(SearchedCharacter)).slice(0, 10).map(x =>
                      <st.SingleCharacter onClick={() => SetPlanetInfo(x)}> {x.name} </st.SingleCharacter>
                    )
                }
              </st.CharactersList>
              : SearchOption === "fl" &&
              <st.CharactersList>
                {
                  !SearchedCharacter.length ?
                    Characters.slice(StartPoint, StartPoint + 10).map(x =>
                      <st.SingleCharacter onClick={() => SetFilmInfo(x)}> {x.title} </st.SingleCharacter>
                    )
                    :
                    Characters.filter(x => x.name.toLowerCase().includes(SearchedCharacter)).slice(0, 10).map(x =>
                      <st.SingleCharacter onClick={() => SetFilmInfo(x)}> {x.title} </st.SingleCharacter>
                    )
                }
              </st.CharactersList>
        }


        {
          Characters.length &&
          <st.PaginationContainer>
            <Icon onClick={() => GetPreviousCharactersPage()} style={{ color: 'white', fontSize: '1em', cursor: 'pointer' }} type='left' />
            <st.PageNumber> {PageNumber} </st.PageNumber>
            <Icon onClick={() => GetNextCharactersPage()} style={{ color: 'white', fontSize: '1em', cursor: 'pointer' }} type='right' />
          </st.PaginationContainer>
        }
      </st.LeftContainer>






















      {
        (HasSelected === "loading" && SearchOption === "ch") ?
          <st.CharacterInfoLoading>
            <Icon type='loading' style={{ color: 'white' }} />
          </st.CharacterInfoLoading>
          : HasSelected === "done" && SearchOption === "ch" ?
            <st.CharacterInfo>
              <st.CharacterName> {SelectedCharacter.name} </st.CharacterName>
              <st.InfoGrid>
                <st.LeftPart>
                  <st.SubTitle> Birthdate: </st.SubTitle>
                  <st.Birthdate> {SelectedCharacter.birthYear} </st.Birthdate>

                  <st.SubTitle> Home world: </st.SubTitle>
                  <st.HomePlanet onClick={() => GetPlanetInfo(SelectedCharacter.homeworld)}> {LocalHomeWorld || <Icon type='loading' />} </st.HomePlanet>

                  <st.SubTitle> Eye color: </st.SubTitle>
                  <st.EyeColor> {SelectedCharacter.eyeColor} </st.EyeColor>

                  <st.SubTitle> Gender: </st.SubTitle>
                  <st.Gender> {
                    SelectedCharacter.gender === "male" ? <div><Icon type='man' /> Male </div>
                      : SelectedCharacter.gender === "female" ? <div><Icon type='woman' /> Female</div>
                        : SelectedCharacter.gender === "hermaphrodite" ? <div><Icon type='user' /> Hermaphrodite </div>
                          : <div><Icon type='border' /> None </div>
                  } </st.Gender>
                </st.LeftPart>

                <st.RightPart>
                  <st.SubTitle> Height:  </st.SubTitle>
                  <st.Height> {SelectedCharacter.height} cm </st.Height>

                  <st.SubTitle> Hair Color: </st.SubTitle>
                  <st.HairColor> {SelectedCharacter.hairColor} </st.HairColor>

                  <st.SubTitle> Weigh: </st.SubTitle>
                  <st.Mass> {SelectedCharacter.mass !== null ? SelectedCharacter.mass + " kg" : "unknow"}  </st.Mass>

                  <st.SubTitle> Skin color </st.SubTitle>
                  <st.SkinColor> {SelectedCharacter.skinColor} </st.SkinColor>
                </st.RightPart>
              </st.InfoGrid>
            </st.CharacterInfo>
            :
            (HasSelected === "loading" && SearchOption === "pl") ?
              <st.PlanetInfoLoadingMain>
                <Icon style={{ color: 'white', }} type='loading' />
              </st.PlanetInfoLoadingMain>
              : HasSelected === "done" && SearchOption === "pl" ?
                <st.PlanetInfoMain>
                  <st.PlanetName> {SelectedPlanet.name} </st.PlanetName>

                  <st.PlanetInfoGrid>
                    <st.SubTitle> Diameter </st.SubTitle>
                    <st.InfoContent> {SelectedPlanet.diameter !== null ? SelectedPlanet.diameter : "unknown"} </st.InfoContent>

                    <st.SubTitle> Gravity </st.SubTitle>
                    <st.InfoContent> {SelectedPlanet.gravity !== null ? SelectedPlanet.gravity : "unknown"} </st.InfoContent>

                    <st.SubTitle> Population </st.SubTitle>
                    <st.InfoContent> {SelectedPlanet.population !== null ? SelectedPlanet.population : "unknown"} </st.InfoContent>

                    <st.SubTitle> Climates </st.SubTitle>
                    <st.InfoContent> {SelectedPlanet.climates !== null ? SelectedPlanet.climates : "unknown"} </st.InfoContent>

                    <st.SubTitle> Terrains </st.SubTitle>
                    <st.InfoContent> {SelectedPlanet.terrains !== null ? SelectedPlanet.terrains : "unknown"} </st.InfoContent>

                    <st.SubTitle> Surface Water </st.SubTitle>
                    <st.InfoContent> {SelectedPlanet.surfaceWater !== null ? SelectedPlanet.surfaceWater : "unknown"} </st.InfoContent>
                  </st.PlanetInfoGrid>
                </st.PlanetInfoMain>
                : HasSelected === "done" && SearchOption === "fl" ?
                  <st.FilmInfoContainer>
                    <st.OpeningMessageContainer>
                      <st.OpeningMessage> {SelectedFilm.openingCrawl} </st.OpeningMessage>
                    </st.OpeningMessageContainer>

                    <st.FilmInfo>
                      <st.FilmName> {SelectedFilm.title} <br /> ({SelectedFilm.releaseDate.split("-")[0]}) </st.FilmName>
                      <st.SubInfo>
                        <st.SubTitle> Release Date: </st.SubTitle>
                        <st.InfoContent> {SelectedFilm.releaseDate} </st.InfoContent>

                        <st.SubTitle> Director: </st.SubTitle>
                        <st.InfoContent> {SelectedFilm.director} </st.InfoContent>

                        <st.SubTitle> Producers: </st.SubTitle>
                        <st.InfoContent> {SelectedFilm.producers.map((x, i) => i < SelectedFilm.producers.length - 1 ? x + ", " : x)} </st.InfoContent>)
                      </st.SubInfo>
                    </st.FilmInfo>
                  </st.FilmInfoContainer>
                  : HasSelected === "loading" && SearchOption === "fl" &&
                  <st.LoadingFilm>
                    <Icon style={{ color: 'white' }} type='loading' />
                  </st.LoadingFilm>
      }




























      {
        ShowPlanetOption === "loading" ?
          <st.PlanetInfoLoading>
            <Icon style={{ color: 'white', }} type='loading' />
          </st.PlanetInfoLoading>
          : ShowPlanetOption === "done" ?
            <st.PlanetInfo>
              <st.PlanetName> {SelectedPlanet.name} </st.PlanetName>

              <st.PlanetInfoGrid>
                <st.SubTitle> Diameter </st.SubTitle>
                <st.InfoContent> {SelectedPlanet.diameter !== null ? SelectedPlanet.diameter : "unknown"} </st.InfoContent>

                <st.SubTitle> Gravity </st.SubTitle>
                <st.InfoContent> {SelectedPlanet.gravity !== null ? SelectedPlanet.gravity : "unknown"} </st.InfoContent>

                <st.SubTitle> Population </st.SubTitle>
                <st.InfoContent> {SelectedPlanet.population !== null ? SelectedPlanet.population : "unknown"} </st.InfoContent>

                <st.SubTitle> Climates </st.SubTitle>
                <st.InfoContent> {SelectedPlanet.climates !== null ? SelectedPlanet.climates : "unknown"} </st.InfoContent>

                <st.SubTitle> Terrains </st.SubTitle>
                <st.InfoContent> {SelectedPlanet.terrains !== null ? SelectedPlanet.terrains : "unknown"} </st.InfoContent>

                <st.SubTitle> Surface Water </st.SubTitle>
                <st.InfoContent> {SelectedPlanet.surfaceWater !== null ? SelectedPlanet.surfaceWater : "unknown"} </st.InfoContent>
              </st.PlanetInfoGrid>
            </st.PlanetInfo>
            :
            <div />
      }

      {/* <st.AnotherLists>
        <st.AnotherListsTitle> Check other lists </st.AnotherListsTitle>

        <st.CenterText>
          <Link to=''>
            <st.AnotherListsOption> * Planets </st.AnotherListsOption>
          </Link>
          <Link>
            <st.AnotherListsOption> * Films </st.AnotherListsOption>
          </Link>
          
        </st.CenterText>
      </st.AnotherLists> */}





    </st.CharacterMainContainer >
  )
}