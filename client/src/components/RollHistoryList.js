import React from 'react';

export const RollHistoryList = ({rollHistory}) => {
  debugger;
  const rollList = rollHistory.map((roll, index) => {
    debugger;
    const diceList = roll.dice.map((die, index) => {
      debugger;
      return(
        <li key={index}>
          <p>Sides: {die.sides}</p>
          <p>Value: {die.value}</p>
        </li>
      )
    })
    debugger;
    return(
      <li key={index}>
        <h4>ID: {roll.id}</h4>
        <p>Dice: </p>
          <ul>
            {diceList}
          </ul>
        <p>Total</p>
      </li>
    )
  })
  return(
    <div>
      <ol>
        {rollList}
      </ol>
    </div>
  )
}
