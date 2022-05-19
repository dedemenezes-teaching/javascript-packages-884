import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['button', 'link']

  disable() {
    this.buttonTarget.disabled = true
    this.buttonTarget.innerText = "Thank you!"
    this.linkTarget.classList.remove('d-none')
  }

  reset() {
    this.buttonTarget.disabled = false
    this.buttonTarget.innerText = 'Click me!'
    this.linkTarget.classList.add('d-none')
  }
}
