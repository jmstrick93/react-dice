import React, { Component } from 'react';
import { SidesOptions } from '../components/SidesOptions'
import { bindActionCreators } from 'redux';
import { addSide } from '../actions/diceActions'
import { connect } from 'react-redux'

class SidesOptionsContainer extends Component {

  render(){
    const {die, addSide} = this.props
    return(
      <SidesOptions addSide={addSide} die={die} />
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
    addSide
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SidesOptionsContainer)
