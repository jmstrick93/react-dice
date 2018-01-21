import React, { Component } from 'react';

class SidesOptionsContainer extends Component {
  render(){
    const {die} = this.props
   return (
     <div>
       <button>+</button>
        <p>{die.sides} sides</p>
       <button>-</button>
    </div>
  )
  }
}

export default SidesOptionsContainer
