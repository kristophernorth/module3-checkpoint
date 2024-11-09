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

  setActiveJot(id) {
    const foundJot = AppState.jots.find(jot => jot.id == id)
    AppState.activeJot = foundJot
    console.log(AppState.activeJot);
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

    const activeJot = AppState.activeJot
    const indexToRemove = AppState.jots.indexOf(activeJot)
    // const indexToRemove = AppState.jots.findIndex(jot => jot.id == jotId)
    AppState.activeJot = null
    // console.log('deleting jot', indexToRemove);
    AppState.jots.splice(indexToRemove, 1)
    this.saveJots()

    // const activeJot = AppState.activeJot
    // const indexToRemove = AppState.jots.indexOf(activeJot)
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