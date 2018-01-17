import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import { AddDieButton } from './AddDieButton';

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
        <AddDieButton />
      </div>
    );
  }
}

export default App;
