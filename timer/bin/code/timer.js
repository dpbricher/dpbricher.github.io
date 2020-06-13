import { Component } from './preact.js'
import jsx from './jsx.js'

const pad2 = input => `${input}`.padStart(2, '0')

export default class Timer extends Component {
  constructor() {
    super()

    this.state = {
      start: 0,
      time: 0
    }

    this.start = this._start.bind(this)
    this.stop = this._stop.bind(this)
    this.tick = this._tick.bind(this)
  }

  queueNextTick() {
    this.tickHandle = requestAnimationFrame(this.tick)
  }

  _tick() {
    this.setState({ time: Date.now() - this.state.start })
    this.queueNextTick()
  }

  _start() {
    if (this.tickHandle == null) {
      this.queueNextTick()
      this.setState({ start: Date.now() })
    }
  }

  _stop() {
    if (this.tickHandle != null) {
      cancelAnimationFrame(this.tickHandle)
      this.tickHandle = null

      this.setState({ time: 0 })
    }
  }

  render(_, state) {
    const time = new Date(state.time)

    const minutes = pad2(time.getMinutes())
    const seconds = pad2(time.getSeconds())
    const ms = pad2((time.getMilliseconds() / 10) | 0)

    return jsx`<div class="-timer">
      <div class="time">${minutes}:${seconds}:${ms}</div>
      <div class="controls common">
        <input class="start" onClick=${this.start} type="button" value="Start"/>
        <input class="stop" onClick=${this.stop} type="button" value="Stop"/>
      </div>
    </div>`
  }
}
