import React, { Component } from 'react'
import './btn.css'
export class Butten extends Component {
  handelclick = () => {
    console.log('butten',this.props);
    if (this.props.rolldice) {
      this.props.rolldice()
    }

    if (this.props.hold) {
      this.props.hold()
    }
    if(this.props.newgame){
      this.props.newgame()
    }

  }

  render() {

    return (
      <div>
        <button onClick={this.handelclick} disabled={this.props.disable}>{this.props.name} </button>
      </div>
    )
  }
}

export default Butten
