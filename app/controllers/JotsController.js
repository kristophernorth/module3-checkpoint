import { AppState } from "../AppState.js";
import { jotsService } from "../services/JotsService.js";




export class JotsController {
  constructor() {
    console.log('jots working???');
    this.drawJots()
    AppState.on('jots', this.drawJots)
    // jotsService.loadJots()
  }

  drawJots() {
    console.log('✏️🚗');
    const jots = AppState.jots
    let jotsContent = ''
    jots.forEach(jot => jotsContent += jot.CardTemplate)
    const jotCardElm = document.getElementById('jot-card')
    jotCardElm.innerHTML = jotsContent
  }

}