export default class Pokemon {
  constructor({ _id = "", name, height, description, desc }) {
    this.id = _id
    this.name = name
    this.height = height
    this.description = description || desc

    if (Array.isArray(this.description)) {
      this.description = this.description.join('\n')
    }
  }


  get Template() {
    return `
    <div class="card-body">
      <h4 class="card-title">${this.name}</h4>
      <p class="card-text">Components: ${this.height}</p>
      <p class="card-text">${this.description}</p>
      ${this.Button}
    </div>
    `
  }
  get Button() {
    if (this.id) {
      return `<button onclick="app.myPokemonController.removePokemon()" class="btn btn-danger">Remove Pokemon</button>`
    }
    return `<button onclick="app.myPokemonController.addPokemon()" class="btn btn-success">Add Pokemon</button>`
  }
}





// attack_type: "ranged"
// casting_time: "1 action"
// classes: Array(1)
  // 0:
  // name: "Wizard"
  // url: "/api/classes/wizard"
// __proto__: Object
// length: 1
// __proto__: Array(0)
// components: Array(3)
// 0: "V"
// 1: "S"
// 2: "M"
// length: 3
// __proto__: Array(0)
// concentration: false
// damage:
// damage_at_slot_level:
// 2: "4d4"
// 3: "5d4"
// 4: "6d4"
// 5: "7d4"
// 6: "8d4"
// 7: "9d4"
// 8: "10d4"
// 9: "11d4"
// __proto__: Object
// damage_type:
// name: "Acid"
// url: "/api/damage-types/acid"
// __proto__: Object
// __proto__: Object
// desc: Array(1)
// 0: "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn."
// length: 1
// __proto__: Array(0)
// duration: "Instantaneous"
// higher_level: Array(1)
// 0: "When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd."
// length: 1
// __proto__: Array(0)
// index: "acid-arrow"
// level: 2
// material: "Powdered rhubarb leaf and an adder's stomach."
// name: "Acid Arrow"
// range: "90 feet"
// ritual: false
// school:
// name: "Evocation"
// url: "/api/magic-schools/evocation"