import { ProxyState } from "../AppState.js";
import _apiPokemonServ from "../Services/ApiPokemonService.js";

function _drawApiSpells() {
  let spells = ProxyState.apiSpells
  let template = ''
  spells.forEach(s => template += `<li onclick="app.apiSpellsController.getDetails('${s.index}')">${s.name}</li>`)
  document.getElementById('api-spells').innerHTML = template
}

export default class ApiSpellsController {
  constructor() {
    // SUBSCRIBE
    ProxyState.on("apiSpells", _drawApiSpells)
    // GET THE DATA
    this.getAllApiSpells()
  }

  getAllApiSpells() {
    try {
      apiSpellsService.getAll()
    } catch (error) {
      console.error(error)
    }
  }

  getDetails(index) {
    try {
      apiSpellsService.getDetails(index)
    } catch (error) {
      console.error(error)
    }
  }
}