import { AppState } from "../AppState.js";
import { jotsService } from "../services/JotsService.js";
import { getFormData } from "../utils/FormHandler.js";




export class JotsController {
  constructor() {
    console.log('jots working???');
    this.drawJots()
    AppState.on('activeJot', this.drawActiveJotDetails)
    AppState.on('jots', this.drawJots)
    jotsService.loadJots()
    // this.drawActiveJotDetails()
    //for some reason this is preventing the active title from grabbing title color from active card
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

    jots.forEach(jot => jotsContent += jot.ActiveJotDescription)
    const activeDescriptionElm = document.getElementById('description-form')
    activeDescriptionElm.innerHTML = AppState.activeJot.ActiveJotDescription
  }

  setActiveJot(jotId) {
    console.log('setting active jot', jotId);
    jotsService.setActiveJot(jotId)
    // this.drawActiveJotDetails()
  }

  saveActiveJotDescription() {
    event.preventDefault()
    console.log('saving active jot');
    const form = event.target
    const newDescription = form.description.value
    console.log('new cool description', newDescription);
    jotsService.saveActiveJotDescription(newDescription)
  }

  deleteActiveJot(jotId) {
    console.log('deleting');
    const confirmed = confirm('Do you really want to delete this jot?')
    if (confirmed == false) return

    jotsService.deleteActiveJot(jotId)
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