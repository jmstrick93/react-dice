import React, { Component } from "react";
import { connect } from "react-redux";
import { Die } from './Die'
import { addDie, rollDice, removeDie } from '../actions/diceActions';
import { bindActionCreators } from 'redux';

//each die should know its own value by connecting to the Store using its container.

class DieContainer extends Component {

  render(){
    const { dice, index } = this.props
    debugger;
    const die = dice[index]
    let imgURL =`images/6-sided-die/side-${die.value}.png`
    return <Die die={die} removeDie={removeDie} imgURL={imgURL} />
  }
}


const mapStateToProps = (state) => {
  return {
      dice: state.dice
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeDie
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DieContainer);
