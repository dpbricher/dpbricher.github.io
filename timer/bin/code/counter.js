import { Component } from './preact.js'
import jsx from './jsx.js'

export default class Counter extends Component {
  constructor() {
    super()

    this.state = { counter: 0 }

    this.increment = this._increment.bind(this)
    this.reset = this._reset.bind(this)
  }

  _increment() {
    this.setState({ counter: ++this.state.counter })
  }

  _reset() {
    this.setState({ counter: 0 })
  }

  render(props, state) {
    return jsx`<div>
      <span>${state.counter}</span>
      <input onClick="${this.increment}" type="button" value="+"/>
      <input onClick="${this.reset}" type="button" value="Clear"/>
    </div>`
  }
}
