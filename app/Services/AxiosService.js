export const pokemonApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  timeout: 10000
})

export const myPokemonApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/KelseyCrow/pokemon",
  timeout: 10000
})