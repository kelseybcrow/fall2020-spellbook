import { ProxyState } from "../AppState.js";
import myPokemonService from "../Services/MyPokemonService.js";

function _drawActivePokemon() {
  let elem = document.getElementById("active-pokemon")
  if (ProxyState.activePokemon) {
    elem.innerHTML = ProxyState.activePokemon.Template
  } else {
    elem.innerHTML = ""
  }

}

function _drawMyPokemon() {
  let pokemon = ProxyState.myPokemon
  let template = ''
  pokemon.forEach(p => template += `<li onclick="app.myPokemonController.setActive('${p.id}')">${p.name}</li>`)
  document.getElementById('my-pokemon').innerHTML = template
}

export default class MyPokemonController {
  constructor() {
    // SUBSCRIBE
    ProxyState.on("activePokemon", _drawActivePokemon)
    ProxyState.on("myPokemon", _drawMyPokemon)
    // GET DATA
    this.getMyPokemon();
  }
  getMyPokemon() {
    try {
      myPokemonService.getMyPokemon();
    } catch (error) {
      console.error(error)
    }
  }

  setActive(id) {
    myPokemonService.setActive(id)
  }

  addPokemon() {
    try {
      myPokemonService.addPokemon()
    } catch (error) {
      console.error(error)
    }
  }

  removePokemon() {
    try {
      myPokemonService.removePokemon()
    } catch (error) {
      console.error(error)
    }
  }




}