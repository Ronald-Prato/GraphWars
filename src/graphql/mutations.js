/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCharacter = /* GraphQL */ `
  mutation CreateCharacter(
    $input: CreateCharacterInput!
    $condition: ModelCharacterConditionInput
  ) {
    createCharacter(input: $input, condition: $condition) {
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
export const updateCharacter = /* GraphQL */ `
  mutation UpdateCharacter(
    $input: UpdateCharacterInput!
    $condition: ModelCharacterConditionInput
  ) {
    updateCharacter(input: $input, condition: $condition) {
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
export const deleteCharacter = /* GraphQL */ `
  mutation DeleteCharacter(
    $input: DeleteCharacterInput!
    $condition: ModelCharacterConditionInput
  ) {
    deleteCharacter(input: $input, condition: $condition) {
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
export const createPlanet = /* GraphQL */ `
  mutation CreatePlanet(
    $input: CreatePlanetInput!
    $condition: ModelPlanetConditionInput
  ) {
    createPlanet(input: $input, condition: $condition) {
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
export const updatePlanet = /* GraphQL */ `
  mutation UpdatePlanet(
    $input: UpdatePlanetInput!
    $condition: ModelPlanetConditionInput
  ) {
    updatePlanet(input: $input, condition: $condition) {
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
export const deletePlanet = /* GraphQL */ `
  mutation DeletePlanet(
    $input: DeletePlanetInput!
    $condition: ModelPlanetConditionInput
  ) {
    deletePlanet(input: $input, condition: $condition) {
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
export const createFilm = /* GraphQL */ `
  mutation CreateFilm(
    $input: CreateFilmInput!
    $condition: ModelFilmConditionInput
  ) {
    createFilm(input: $input, condition: $condition) {
      title
      episodeID
      openingCrawl
      director
      producers
      releaseDate
    }
  }
`;
export const updateFilm = /* GraphQL */ `
  mutation UpdateFilm(
    $input: UpdateFilmInput!
    $condition: ModelFilmConditionInput
  ) {
    updateFilm(input: $input, condition: $condition) {
      title
      episodeID
      openingCrawl
      director
      producers
      releaseDate
    }
  }
`;
export const deleteFilm = /* GraphQL */ `
  mutation DeleteFilm(
    $input: DeleteFilmInput!
    $condition: ModelFilmConditionInput
  ) {
    deleteFilm(input: $input, condition: $condition) {
      title
      episodeID
      openingCrawl
      director
      producers
      releaseDate
    }
  }
`;
