import React, { Component } from "react";
import { DiceList } from "./DiceList";
import { connect } from "react-redux";

class DiceListContainer extends Component {

  render(){
    const { dice } = this.props
    return <DiceList dice={ dice }/>
  }


}

const mapStateToProps = (state) => {
  return {
    dice: state.dice
  }
}

export default connect(mapStateToProps)(DiceListContainer)
