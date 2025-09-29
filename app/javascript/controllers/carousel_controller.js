import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["container"]

  connect() {
    this.index = 0
  }

  next() {
    this.index++
    this.update()
  }

  prev() {
    this.index--
    this.update()
  }

  update() {
    const width = this.containerTarget.firstElementChild.offsetWidth + 24 // card width + gap
    this.containerTarget.style.transform = `translateX(${-this.index * width}px)`
  }
}
