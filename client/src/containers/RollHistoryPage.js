import React, { Component } from 'react';
import { fetchRollHistory } from '../actions/rollHistoryActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { RollHistoryList } from '../components/RollHistoryList';

class RollHistoryPage extends Component {

  componentDidMount() {
    this.props.fetchRollHistory();
  }

  render(){
    
    return(
      <div>
        <h1>Roll History</h1>
        <RollHistoryList rollHistory={this.props.rollHistory}/>
      </div>



    )
  }
}

const mapStateToProps = (state) => {
  return(
    {
      dice: state.dice,
      rollHistory: state.rollHistory
    }
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchRollHistory: fetchRollHistory
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RollHistoryPage);
