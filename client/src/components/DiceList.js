import React from 'react';
import { Die } from "./Die";

export const DiceList = ({ dice }) => {

  const diceList = dice.map((die, index) => {
    return (
      <Die die={die} key={index} index={index} />
    )
  })

  return(
    <div className="dice-list">
      {diceList}
    </div>
  )
}
