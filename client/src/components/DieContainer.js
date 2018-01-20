import React, { Component } from "react";
import { DiceList } from "./DiceList";
import { connect } from "react-redux";
import { Die } from './Die'
import { addDie, rollDice } from '../actions/diceActions';

class DieContainer extends Component {

  render(){
    const { value, sides, die } = this.props
    return <Die die={die} value={value} side={sides} />
  }
}


const mapStateToProps = (state) => {
  return {
      value: state.value,
      sides: state.sides
  }
}

export default connect(mapStateToProps)(DieContainer);
