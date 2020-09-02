import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { PokemonApi } from "./AxiosSerivce.js"


class ApiSpellsService {
  async getAll() {
    let res = await dndApi.get('')
    ProxyState.apiSpells = res.data.results
  }
  async getDetails(index) {
    let res = await dndApi.get(index)
    ProxyState.activeSpell = new Spell(res.data)
  }

}

const apiSpellsService = new ApiSpellsService()
export default apiSpellsService
