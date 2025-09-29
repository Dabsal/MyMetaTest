import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  brilhar() {
    this.element.classList.add("animate-ping")
    setTimeout(() => {
      this.element.classList.remove("animate-ping")
    }, 1000)
  }
}