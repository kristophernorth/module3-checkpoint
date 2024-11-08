import { JotsController } from './controllers/JotsController.js';

class App {

  JotsController = new JotsController

}


const app = new App()
// @ts-ignore
window.app = app
