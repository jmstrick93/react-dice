import React, { Component } from "react";
import { DiceList } from "./DiceList";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { addDie, rollDice, removeDie } from '../actions/diceActions';

class DiceListContainer extends Component {

  render(){
    const { dice, addDie, rollDice } = this.props
    const rollTotal = Object.entries(dice).reduce((computedTotal, die) =>{
      return computedTotal + Number.parseInt(die[1].value)
    }, 0)
    return <DiceList addDie={ addDie } rollDice={ rollDice } dice={ dice } rollTotal={rollTotal}/>
  }

}

const mapStateToProps = (state) => {
  return {
    dice: state.dice
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addDie: addDie,
    rollDice: rollDice
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DiceListContainer)
