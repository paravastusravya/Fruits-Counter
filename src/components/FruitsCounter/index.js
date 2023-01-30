// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  onClickMango = () => {
    const {mangoCount} = this.state
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  onClickBanana = () => {
    const {bananaCount} = this.state
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="fruits-counter-container">
        <div className="container">
          <h1 className="heading">
            Bob ate <span className="span-element">{mangoCount}</span> mangoes
            <span className="span-element">{bananaCount}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button
                type="button"
                className="button"
                onClick={this.onClickMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                alt="banana"
                className="image"
              />
              <button
                type="button"
                className="button"
                onClick={this.onClickBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
