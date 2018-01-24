import React, { Component } from "react";
import { DiceList } from "../components/DiceList";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { addDie, rollDice } from '../actions/diceActions';
import {postRollHistory} from '../actions/rollHistoryActions';

//only want dice list responsible for how many dice there are and calculating roll total.



class DiceListContainer extends Component {

  componentDidUpdate(prevProps, prevState){
    let lengthChange
    let sidesChange
    prevProps.dice.length === this.props.dice.length ? lengthChange = false : lengthChange = true;

    if (lengthChange === false && this.props.dice.length > 0){

      let index = 0
      for (const die of this.props.dice){
        debugger;
        if (die.sides !== prevProps.dice[index].sides) {
          sidesChange = true;
          break;
        } else {
          sidesChange = false;
          index++
        };
      };
    }
    sidesChange === false && lengthChange === false ? postRollHistory(this.props.dice) : null
  }

  render(){
    const { dice, addDie, rollDice} = this.props
    const rollTotal = Object.entries(dice).reduce((computedTotal, die) =>{
      return computedTotal + Number.parseInt(die[1].value, 10)
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
