import { ProxyState } from "../AppState.js";
import apiPokemonService from "../Services/ApiPokemonService.js";

function _drawApiPokemon() {
  let pokemon = ProxyState.apiPokemon
  let template = ''
  pokemon.forEach(p => template += `<li onclick="app.apiPokemonController.getDetails('${p.index}')">${p.name}</li>`)
  document.getElementById('api-pokemon').innerHTML = template
}

export default class ApiPokemonController {
  constructor() {
    // SUBSCRIBE
    ProxyState.on("apipokemon", _drawApiPokemon)
    // GET THE DATA
    this.getAllApiPokemon()
  }

  getAllApiPokemon() {
    try {
      apiPokemonService.getAll()
    } catch (error) {
      console.error(error)
    }
  }

  getDetails(index) {
    try {
      apiPokemonService.getDetails(index)
    } catch (error) {
      console.error(error)
    }
  }
}