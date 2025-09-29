// app/javascript/controllers/project_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["background"]

  preview(event) {
    const imageUrl = event.currentTarget.dataset.projectImageUrl
    this.backgroundTarget.style.backgroundImage = `url('${imageUrl}')`
  }

  reset() {
    this.backgroundTarget.style.backgroundImage = ""
  }
}
