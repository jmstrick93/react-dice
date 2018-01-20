import React, { Component } from "react";
import { connect } from "react-redux";
import { Die } from './Die'
import { addDie, rollDice, removeDie } from '../actions/diceActions';
import { bindActionCreators } from 'redux';

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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeDie
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DieContainer);
