import React, { Component } from 'react'
import Butten from '../Buttens/Butten.component'
import Dice from '../Dice/Dice.component'
import Player from '../player/Player.component'
import './game.css'

export class Game extends Component {
  state = {
    turn: 0,
    point: 100,
    players: [
      {
        name: 'foad',
        corrunt: 0,
        score: 0
      },
      {
        name: 'osama',
        corrunt: 0,
        score: 0
      }
    ],
    dice1: 0,
    dice2: 0,
    rolling: 0
  }
  roll = () => {
    let n1 = Math.floor(Math.random() * 6) + 1
    let n2 = Math.floor(Math.random() * 6) + 1
    let arr = this.state.players
    
    if (n1===n2) {
      arr[this.state.turn].corrunt = 0
      if (this.state.turn)
        this.setState({
          players: arr,
          turn: 0
        })
      else {
        this.setState({
          players: arr,
          turn: 1
        })
      }
      this.setState({dice2:0,
       dice1:0 })
      console.log('hi'+n1 +' '+n2);
      return 'hi';
    }

    arr[this.state.turn].corrunt = this.state.players[this.state.turn].corrunt + n1 + n2
    this.setState({
      players: arr,
      dice1: n1,
      dice2: n2,
    })
    console.log('roll'+n1+' '+n2);
    console.log('aba', n1 + ' ' + n2);
  }
  hold = () => {
    let arr = this.state.players
    arr[this.state.turn].score = arr[this.state.turn].score + arr[this.state.turn].corrunt
    arr[this.state.turn].corrunt = 0
    this.setState({ players: arr, dice2: 0, dice1: 0 })
    if (this.state.players[this.state.turn].score >= this.state.point) {
      this.setState({ rolling: 1 })
      return;
    }
    if (this.state.turn)
      this.setState({
        turn: 0
      })
    else {
      this.setState({
        turn: 1
      })
    }
  }

  newGame = () => {
    let arr = this.state.players
    arr.map((item) => {
      item.corrunt = 0
        item.score =0;
    })

    this.setState({
      players: arr,
      dice2:0,
      dice1:0,
      rolling:0
    })
  }

  render() {
    return (
      <div className={'container'}>
        <Player score={this.state.players[0].score} current={this.state.players[0].corrunt} name={this.state.players[0].name} />
        {this.state.rolling ? <div><Butten rolldice={this.roll} disable={true} name={'roll'} /><Butten hold={this.hold} disable={true} name={'hold'} /></div> : <div><Butten rolldice={this.roll} name={'roll'} disable={false} /><Butten hold={this.hold} name={'hold'} /></div>}
        <Butten newgame={this.newGame} name={'new game'}/>
        <Dice dice={this.state.dice1}/>
        <Dice dice={this.state.dice2}/>
        <Player score={this.state.players[1].score} current={this.state.players[1].corrunt} name={this.state.players[1].name} />
        {this.state.rolling ? <div className={'winner'}>{this.state.players[this.state.turn].name} win</div> : <></>}
      </div>
    )
  }
}

export default Game
