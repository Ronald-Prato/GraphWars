/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCharacter = /* GraphQL */ `
  query GetCharacter($id: ID!) {
    getCharacter(id: $id) {
      id
      name
      birthYear
      eyeColor
      gender
      height
      hairColor
      mass
      skinColor
      homeworld
    }
  }
`;
export const listCharacters = /* GraphQL */ `
  query ListCharacters(
    $filter: ModelCharacterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCharacters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        birthYear
        eyeColor
        gender
        height
        hairColor
        mass
        skinColor
        homeworld
      }
      nextToken
    }
  }
`;
export const getPlanet = /* GraphQL */ `
  query GetPlanet($id: ID!) {
    getPlanet(id: $id) {
      id
      name
      diameter
      rotationPeriod
      orbitalPeriod
      gravity
      population
      climates
      terrains
      surfaceWater
    }
  }
`;
export const listPlanets = /* GraphQL */ `
  query ListPlanets(
    $filter: ModelPlanetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlanets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        diameter
        rotationPeriod
        orbitalPeriod
        gravity
        population
        climates
        terrains
        surfaceWater
      }
      nextToken
    }
  }
`;
export const getFilm = /* GraphQL */ `
  query GetFilm($id: ID!) {
    getFilm(id: $id) {
      title
      episodeID
      openingCrawl
      director
      producers
      releaseDate
    }
  }
`;
export const listFilms = /* GraphQL */ `
  query ListFilms(
    $filter: ModelFilmFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFilms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        title
        episodeID
        openingCrawl
        director
        producers
        releaseDate
      }
      nextToken
    }
  }
`;
