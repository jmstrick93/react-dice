import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import { connect } from 'react-redux';
import DiceListContainer from "./DiceListContainer";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SettingsPage from './SettingsPage';
import RollHistoryPage from './RollHistoryPage';
import DicePage from './DicePage';
import { Navbar } from '../components/Navbar';

class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">
        <div className='container'>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to ReactDice</h1>
        </header>
        <Navbar />
        <Switch>
          <Route exact path="/" component={DicePage} />
          <Route path="/history" component={RollHistoryPage} />
          <Route path="/settings" component={SettingsPage} />
        </Switch>
        </div>
      </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {dice: state.dice}
}

export default connect(mapStateToProps)(App);
