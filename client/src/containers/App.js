import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import { connect } from 'react-redux';
import DiceListContainer from "./DiceListContainer";

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className='container'>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to ReactDice</h1>
        </header>
        <DiceListContainer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {dice: state.dice}
}

export default connect(mapStateToProps)(App);
