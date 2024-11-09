import { AppState } from "../AppState.js";
import { Jot } from "../models/Jot.js"
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