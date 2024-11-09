import { generateId } from "../utils/GenerateId.js"



export class Jot {
  constructor(data) {
    this.id = generateId()
    this.createdDate = data.createdDate ? new Date(data.createdDate) : new Date()
    this.updatedDate = data.updatedDate ? new Date(data.updatedDate) : new Date()
    this.color = data.color
    this.title = data.title
    this.description = data.description
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

    <h3 class="${this.color}">${this.title}</h3>
    <p>Created on: ${this.shortReportedDate}</p>
    <pLast updated: ${this.formattedUpdatedAt}</p>
    `
  }


  get shortReportedDate() {
    return this.createdDate.toLocaleDateString('en-us', { year: '2-digit', day: '2-digit', month: '2-digit' })
  }

  get formattedUpdatedAt() {
    return this.updatedDate.toLocaleDateString('en-us', { hour: '2-digit', minute: '2-digit', year: '2-digit', day: '2-digit', month: '2-digit' })
  }

  // get createdDateFormatted() {
  //   return this.createdDate.toLocaleTimeString('en-US', { year: 'numeric', month: 'short', day: 'numeric', weekday: 'short' })
  // }
  // get updatedDateFormatted() {
  //   return this.updatedDate.toLocaleTimeString('en-US', { year: 'numeric', month: 'short', day: 'numeric', weekday: 'short' })
  // }
}

