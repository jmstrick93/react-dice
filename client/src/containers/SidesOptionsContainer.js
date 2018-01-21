import React, { Component } from 'react';
import { SidesOptions } from '../components/SidesOptions'
import { bindActionCreators } from 'redux';
import { addSide, removeSide } from '../actions/diceActions'
import { connect } from 'react-redux'

class SidesOptionsContainer extends Component {

  render(){
    const {die, addSide, removeSide} = this.props
    return(
        <SidesOptions removeSide={removeSide} addSide={addSide} die={die} />
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
    addSide,
    removeSide
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SidesOptionsContainer)
