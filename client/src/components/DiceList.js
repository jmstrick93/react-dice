import React from 'react';
import { Die } from "./Die";
import { AddDieButton } from './AddDieButton'


export const DiceList = ({ dice, addDie }) => {

  const diceList = dice.map((die, index) => {
    return (
      <Die die={die} key={index} index={index} />
    )
  })
  return(
    <div className="dice-list">
      {diceList}
      <AddDieButton addDie={addDie}/>
    </div>
  )
}
