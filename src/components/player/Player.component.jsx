import React, { Component } from 'react'

export class Player extends Component {

  render(){
    return (
      <div className="playerinfo">
        <h1>{this.props.name}</h1>
        <div className="score">
        score
          {this.props.score}</div>
        <div className="current">
        current
          {this.props.current}</div>
        </div>)
    }
}

export default Player
