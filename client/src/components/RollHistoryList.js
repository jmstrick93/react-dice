import React from 'react';

export const RollHistoryList = ({rollHistory}) => {
  const rollList = rollHistory.map((roll, index) => {
    const diceList = roll.dice.map((die, index) => {
      return(
        <li className='text-justify'>Sides: {die.sides}, Value: {die.value}</li>
      )
    })
    return(
      <li className='list-group-item' key={index}>
        <h4 className='text-justify'>ID: {roll.id}</h4>
        <p className='text-justify'>Dice: </p>
          <ul>
            {diceList}
          </ul>
        <p className='text-justify'>Total: </p>
      </li>
    )
  })
  return(
    <div>
      <ol className='list-group'>
        {rollList}
      </ol>
    </div>
  )
}