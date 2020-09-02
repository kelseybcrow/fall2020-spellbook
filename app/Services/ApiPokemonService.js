import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { pokemonApi } from "./AxiosService.js"


class PokemonApiService {
  async getAll() {
    let res = await pokemonApi.get('/pokemon?limit=30')
    ProxyState.apiPokemon = res.data.results
  }
  async getDetails(name) {
    let res = await pokemonApi.get(`pokemon/${name}`)
    ProxyState.activePokemon = new Pokemon(res.data)
  }

}

const pokemonApiService = new PokemonApiService()
export default pokemonApiService
