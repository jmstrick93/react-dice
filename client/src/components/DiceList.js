import React from 'react';

export const DiceList = ({ dice }) => {

  const diceList = dice.map((die, index) => {
    return (
      <div className="die" key={index}>
        {die.value} - {index}
      </div>
    )
  })

  return(
    <div className="dice-list">
      {diceList}
    </div>
  )
}
