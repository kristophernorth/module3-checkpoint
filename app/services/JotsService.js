import { AppState } from "../AppState.js";
import { Jot } from "../models/Jot.js"
import { Pop } from "../utils/Pop.js";
import { loadState, saveState } from "../utils/Store.js";



class JotsService {
  createJot(jotData) {
    const jot = new Jot(jotData)
    console.log('the service is working', Jot);
    AppState.jots.unshift(jot)
    this.saveJots()
  }

  setActiveJot(jotId) {
    const selectedJot = AppState.jots.find(jot => jot.id == jotId)
    console.log('come on man', selectedJot);
    AppState.activeJot = selectedJot
    console.log(AppState);
  }

  saveActiveJotDescription(newDescription) {
    const activeJot = AppState.activeJot
    activeJot.description = newDescription
    activeJot.updatedDate = new Date()
    console.log(AppState);
    this.saveJots
    AppState.emit('activeJot')
  }

  deleteActiveJot(jotId) {

    const activeJot = AppState.jots.find(jot => jot.id == jotId)
    const indexToRemove = AppState.jots.indexOf(activeJot)
    console.log('deleting jot', activeJot, indexToRemove);
    AppState.jots.splice(indexToRemove, 1)
    this.saveJots()

    // const activeJot = AppState.activeJot
    // const indexToRemove = AppState.jots.indexOf(activeJot)
    // AppState.activeJot = null
    // AppState.jots.splice(indexToRemove, 1)
    // this.saveJots()
  }

  saveJots() {
    const jots = AppState.jots
    saveState('jots', jots)
  }

  loadJots() {
    const jots = loadState('jots', [Jot])
    console.log('loaded jots', jots);
    AppState.jots = jots
  }

  // createJotCard(formData) {
  //   const jot = (new Jot(formData))
  //   console.log('created jot', jot);
  //   AppState.jots.push(jot)
  //   this.saveJots()
  // }

}

export const jotsService = new JotsService()