import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { mypokemonApi } from "./AxiosSerivce.js"

class MySpellsService {
  setActive(id) {
    ProxyState.activeSpell = ProxyState.mySpells.find(s => s.id == id)

  }
  async getMySpells() {
    let res = await sandboxApi.get('')
    ProxyState.mySpells = res.data.data.map(s => new Spell(s))
  }
  async addSpell() {
    let res = await sandboxApi.post('', ProxyState.activeSpell)
    // ProxyState.mySpells.push(res.data.data)
    // ProxyState.mySpells = ProxyState.mySpells
    ProxyState.mySpells = [...ProxyState.mySpells, new Spell(res.data.data)]
  }
  async removeSpell() {
    await sandboxApi.delete(ProxyState.activeSpell.id)
    ProxyState.mySpells = ProxyState.mySpells.filter(s => s.id != ProxyState.activeSpell.id)
    ProxyState.activeSpell = null

  }

}

const mySpellsService = new MySpellsService()
export default mySpellsService