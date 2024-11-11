import { generateId } from "../utils/GenerateId.js"



export class Jot {
  constructor(data) {
    this.id = generateId()
    this.createdDate = data.createdDate ? new Date(data.createdDate) : new Date()
    this.updatedDate = data.updatedDate ? new Date(data.updatedDate) : new Date()
    this.color = data.color
    this.title = data.title
    this.description = data.description || ''
    // the description line above had: || ''
  }

  get CardTemplate() {
    return `

    <div onclick="app.JotsController.setActiveJot('${this.id}')" class="card border border-dark m-1 p-2">
      <div class="col">
        <h5 class="${this.color}">${this.title}</h5>
      </div>
      <div class="col text-end">
        <span>${this.shortReportedDate}</span>
      </div>
      <p>${this.description}</p>
    </div>
    `
  }


  get ActiveJotTemplate() {
    return `
     
    <form class="col-md-12 p-2">
      <div class="col-md-8">
        <h3 class="${this.color}">${this.title}</h3>
        <p>Created on: ${this.shortReportedDate}</p>
        <p>Last updated: ${this.formattedUpdatedAt}</p>
      </div>
      </form>
      `
  }

  get ActiveJotDescription() {
    return `
    
    <form onsubmit="app.JotsController.saveActiveJotDescription()" class="col-md-12 p-2">
      <div class="form-group">
        <label for="description-input">Notes</label>
        <textarea name="description" class="form-control" id="description-input" rows="20">${this.description}</textarea>
        <div class="text-end py-2">
          <button type="submit" class="btn btn-info m-1 order-sm-12">Save</button>
          <button type="button" onclick="app.JotsController.deleteActiveJot('${this.id}')"
            class="btn btn-outline-danger m-1 order-sm-1">Delete</button>
        </div>
      </div>
    </form>
      `
  }
  // <div class="form-group">
  //   <label for="description-input">Notes</label>
  //   <textarea name="description" class="form-control" id="description-input" rows="20">${this.description}</textarea>
  // </div>


  // get createdDateFormatted() {
  //   return this.createdDate.toLocaleTimeString('en-US', { year: 'numeric', month: 'short', day: 'numeric', weekday: 'short' })
  // }
  // get updatedDateFormatted() {
  //   return this.updatedDate.toLocaleTimeString('en-US', { year: 'numeric', month: 'short', day: 'numeric', weekday: 'short' })
  // }
  get shortReportedDate() {
    return this.createdDate.toLocaleDateString('en-us', { year: '2-digit', day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit', })
  }

  get formattedUpdatedAt() {
    return this.updatedDate.toLocaleDateString('en-us', { hour: '2-digit', minute: '2-digit', year: '2-digit', day: '2-digit', month: '2-digit' })
  }

  // get updatedDateFormatted() {
  //   return this.updatedDate.toLocaleTimeString('en-US', {
  //     day: '2-digit',
  //     month: '2-digit',
  //     year: '2-digit',
  //     hour: 'numeric',
  //     minute: 'numeric',
  //   })
  // }

}

