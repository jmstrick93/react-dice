import React, { Component } from "react";
import { DiceList } from "./DiceList";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { addDie, rollDice } from '../actions/diceActions';

class DiceListContainer extends Component {

  render(){
    const { dice, addDie, rollDice } = this.props
    return <DiceList addDie={ addDie } rollDice={ rollDice } dice={ dice }/>
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
