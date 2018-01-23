import React, { Component } from 'react';
import { fetchRollHistory } from '../actions/diceActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class RollHistoryPage extends Component {

  componentDidMount() {
    this.props.fetchRollHistory();
  }

  render(){
    const {rollHistory} = this.props
    return(
      <div>
        <h1>Roll History</h1>

      </div>



    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchRollHistory: fetchRollHistory
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(RollHistoryPage);
