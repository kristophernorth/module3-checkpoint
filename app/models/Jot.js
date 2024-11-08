import { generateId } from "../utils/GenerateId.js"



export class Jot {
  constructor(data) {
    this.id = generateId()
    this.createdDate = data.createdDate ? new Date(data.listingDate) : new Date()
    this.updatedDate = data.updatedDate ? new Date(data.listingDate) : new Date()
    this.color = data.color
    this.title = data.title
    this.description = data.description
  }

  get CardTemplate() {
    return /*html*/ `

    <div class="card border border-dark m-1 p-2">
      <div class="col">
        <h5>${this.title}</h5>
      </div>
      <div class="col text-end">
        <span>${this.createdDate}</span>
      </div>
      <p>${this.description}</p>
    </div>
    `
  }

  get dateFormatted() {
    return this.createdDate.toLocaleTimeString('en-US', { year: 'numeric', month: 'short', day: 'numeric', weekday: 'short' })
  }
}

