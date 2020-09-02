import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { myPokemonApi } from "./AxiosService.js"

class MyPokemonService {
  setActive(id) {
    ProxyState.activePokemon = ProxyState.myPokemon.find(s => s.id == id)

  }
  async getMyPokemon() {
    let res = await myPokemonApi.get('')
    ProxyState.myPokemon = res.data.data.map(s => new Pokemon(s))
  }
  async addPokemon() {
    let res = await myPokemonApi.post('', ProxyState.activePokemon)
    ProxyState.myPokemon = [...ProxyState.myPokemon, new Pokemon(res.data.data)]
  }
  async removePokemon() {
    await myPokemonApi.delete(ProxyState.activePokemon.id)
    ProxyState.myPokemon = ProxyState.myPokemon.filter(p => p.id != ProxyState.activePokemon.id)
    ProxyState.activePokemon = null

  }

}

const myPokemonService = new MyPokemonService()
export default myPokemonService