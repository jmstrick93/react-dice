import React from 'react';

export const SidesOptions = ({ die, addSide }) =>{

  const handlePlusClick = () => addSide(die.id)
  return(
    <div>
      <button onClick={handlePlusClick}>+</button>
       <p>{die.sides} sides</p>
      <button>-</button>
   </div>
  )
}
