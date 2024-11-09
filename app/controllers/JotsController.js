import { AppState } from "../AppState.js";
import { jotsService } from "../services/JotsService.js";




export class JotsController {
  constructor() {
    console.log('jots working???');
    this.drawJots()
    // AppState.on('jots', this.drawJots)
    // jotsService.loadJots()
  }

  drawJots() {
    console.log('this is draw jots');
    const jots = AppState.jots
    let jotsContent = ''
    jots.forEach(jot => jotsContent += jot.CardTemplate)
    const jotCardElm = document.getElementById('jot-cards')
    jotCardElm.innerHTML = jotsContent
  }

  drawActiveJotDetails() {
    console.log('drawing active card details is working');
    const jots = AppState.jots
    let jotsContent = ''
    jots.forEach(jot => jotsContent += jot.ActiveJotTemplate)
    const activeCardElm = document.getElementById('active-card')
    activeCardElm.innerHTML = AppState.activeJot.ActiveJotTemplate
  }

  setActiveJot(id) {
    console.log('setting active jot', id);
    jotsService.setActiveJot(id)
    this.drawActiveJotDetails()
  }

}