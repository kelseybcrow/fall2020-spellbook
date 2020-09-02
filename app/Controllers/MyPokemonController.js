import { ProxyState } from "../AppState.js";
import myPokemonService from "../Services/MyPokemonService.js";

function _drawActiveSpell() {
  let elem = document.getElementById("active-spell")
  if (ProxyState.activeSpell) {
    elem.innerHTML = ProxyState.activeSpell.Template
  } else {
    elem.innerHTML = ""
  }

}

function _drawMySpells() {
  let spells = ProxyState.mySpells
  let template = ''
  spells.forEach(s => template += `<li onclick="app.mySpellsController.setActive('${s.id}')">${s.name}</li>`)
  document.getElementById('my-spells').innerHTML = template
}

export default class MySpellsController {
  constructor() {
    // SUBSCRIBE
    ProxyState.on("activeSpell", _drawActiveSpell)
    ProxyState.on("mySpells", _drawMySpells)
    // GET DATA
    this.getMySpells();
  }
  getMySpells() {
    try {
      mySpellsService.getMySpells();
    } catch (error) {
      console.error(error)
    }
  }

  setActive(id) {
    mySpellsService.setActive(id)
  }

  addSpell() {
    try {
      mySpellsService.addSpell()
    } catch (error) {
      console.error(error)
    }
  }

  removeSpell() {
    try {
      mySpellsService.removeSpell()
    } catch (error) {
      console.error(error)
    }
  }




}