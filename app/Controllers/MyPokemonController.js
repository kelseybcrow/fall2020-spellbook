import { ProxyState } from "../AppState.js";
import MyPokemonService from "../Services/MyPokemonService.js";

function _drawActivePokemon() {
  let elem = document.getElementById("active-pokemon")
  if (ProxyState.activeSpell) {
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
      MyPokemonService.getMyPokemon();
    } catch (error) {
      console.error(error)
    }
  }

  setActive(id) {
    MyPokemonService.setActive(id)
  }

  addPokemon() {
    try {
      MyPokemonService.addPokemon()
    } catch (error) {
      console.error(error)
    }
  }

  removePokemon() {
    try {
      MyPokemonService.removePokemon()
    } catch (error) {
      console.error(error)
    }
  }




}