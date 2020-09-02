import ApiSpellsController from "./Controllers/ApiPokemonController.js";
import MySpellsController from "./Controllers/MyPokemonController.js";

class App {
  apiPokemonController = new ApiPokemonController()
  myPokemonController = new MyPokemonController()
}

window["app"] = new App();
