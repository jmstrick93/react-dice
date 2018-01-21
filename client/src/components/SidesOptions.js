import React from 'react';

export const SidesOptions = ({ die, addSide, removeSide}) =>{

  const handlePlusClick = () => addSide(die.id)
  const handleMinusClick = () => removeSide(die.id)
  return(
    <div>
      <button onClick={handlePlusClick}>+</button>
       <p>{die.sides} sides</p>
      <button onClick={handleMinusClick}>-</button>
   </div>
  )
}
