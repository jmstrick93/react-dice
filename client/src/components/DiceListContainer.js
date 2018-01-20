import React, { Component } from "react";
import { DiceList } from "./DiceList";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { addDie } from '../actions/diceActions';

class DiceListContainer extends Component {

  render(){
    const { dice } = this.props
    const { addDie } = this.props
    return <DiceList addDie={ addDie } dice={ dice }/>
  }

}

const mapStateToProps = (state) => {
  return {
    dice: state.dice
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addDie: addDie
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DiceListContainer)
