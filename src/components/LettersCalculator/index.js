// Write your code here.

import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {count: 0}

  onChangeText = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="text-container">
          <h1 className="heading">Calculate the letters you enter</h1>
          <label htmlFor="inputEl" className="para">
            Enter the phrase
          </label>
          <br />
          <input
            id="inputEl"
            type="text"
            className="type-text"
            onChange={this.onChangeText}
          />
          <p className="letters-count">No.of letters: {count}</p>
        </div>
        <div className="img-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="imgs"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
