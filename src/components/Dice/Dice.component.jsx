import React, { Component } from 'react'
import './Dice.css'
export class Dice extends Component {
  render() {
    return (
      <div className={`dice dice${this.props.dice}`}>
      </div>
    )
  }
}

export default Dice
