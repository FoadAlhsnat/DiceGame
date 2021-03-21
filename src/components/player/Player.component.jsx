import React, { Component } from 'react'
import './player.css'

export class Player extends Component {

  render() {
    return (
      <div className={`playerinfo ${this.props.active}`}>
        <h1>{this.props.name}</h1>
        <div>
          <div className="score">
            {this.props.score}</div>
          <div className="current">
            <p>current:</p>
          <p>{this.props.current}</p></div>

        </div>

      </div>)
  }
}

export default Player
