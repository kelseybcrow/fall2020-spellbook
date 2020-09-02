import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { PokemonApi } from "./AxiosSerivce.js"


class ApiPokemonService {
  async getAll() {
    let res = await pokemonApi.get('')
    ProxyState.apiPokemon = res.data.results
  }
  async getDetails(index) {
    let res = await PokemonApi.get(index)
    ProxyState.activePokemon = new Pokemon(res.data)
  }

}

const apiPokemonService = new ApiPokemonService()
export default apiPokemonService
