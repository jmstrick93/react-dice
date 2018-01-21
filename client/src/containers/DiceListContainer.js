import React, { Component } from "react";
import { DiceList } from "../components/DiceList";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { addDie, rollDice } from '../actions/diceActions';

//only want dice list responsible for how many dice there are and calculating roll total.

class DiceListContainer extends Component {

  render(){
    const { dice, addDie, rollDice} = this.props
    const rollTotal = Object.entries(dice).reduce((computedTotal, die) =>{
      return computedTotal + Number.parseInt(die[1].value)
    }, 0)
    return (
      <div className='row'>
        <div className='col'>
          <DiceList rollTotal={rollTotal} addDie={ addDie } rollDice={ rollDice } dice={ dice }/>
        </div>
      </div>
    )
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
    rollDice: rollDice,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DiceListContainer)
