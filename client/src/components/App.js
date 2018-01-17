import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import { AddDieButton } from './AddDieButton';
import { addDie } from '../actions/diceActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DiceListContainer from "./DiceListContainer";

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to ReactDice</h1>
        </header>
        <p className="App-intro">
          To get started, click "add a die."
        </p>
        <DiceListContainer />
        <AddDieButton addDie={this.props.addDie}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {dice: state.dice}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addDie: addDie
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
