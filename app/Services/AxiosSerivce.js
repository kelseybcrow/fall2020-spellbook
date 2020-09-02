export const pokemonApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon?limit=1050",
  timeout: 10000
})

export const mypokemonApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/KelseyCrow/pokemon",
  timeout: 10000
})