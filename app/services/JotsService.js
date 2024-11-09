import { AppState } from "../AppState.js";
import { Jot } from "../models/Jot.js"



class JotsService {
  createJot(jotData) {
    const jot = new Jot(jotData)
    console.log('the service is working', Jot);
    AppState.jots.unshift(jot)
    // this.saveJots()
  }

  setActiveJot(id) {
    const foundJot = AppState.jots.find(jot => jot.id == id)
    AppState.activeJot = foundJot
    console.log(AppState.activeJot);
  }


}

export const jotsService = new JotsService()