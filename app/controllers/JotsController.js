import { AppState } from "../AppState.js";
import { jotsService } from "../services/JotsService.js";
import { getFormData } from "../utils/FormHandler.js";




export class JotsController {
  constructor() {
    console.log('jots working???');
    this.drawJots()
    // AppState.on('activeJot', this.drawActiveJotDetails)
    AppState.on('jots', this.drawJots)
    // jotsService.loadJots()
  }

  createJot() {
    event.preventDefault()
    const form = event.target
    const jotData = getFormData(form)
    console.log('submitted', form, jotData);
    jotsService.createJot(jotData)
  }

  drawJots() {
    console.log('this is draw jots');
    const jots = AppState.jots
    let jotsContent = ''
    jots.forEach(jot => jotsContent += jot.CardTemplate)
    const jotCardElm = document.getElementById('jot-cards')
    jotCardElm.innerHTML = jotsContent

    const jotCountElm = document.getElementById('jot-count')
    jotCountElm.innerText = AppState.jots.length.toString()
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

// createJot() {
//   console.log('Creating jot');
//   event.preventDefault()
//   const formElm = event.target
//   const formData = {
//     color: formElm.color.value,
//     title: formElm.title.value
//   }
//   console.log(formData);

// }