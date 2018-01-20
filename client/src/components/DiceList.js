import React from 'react';
import { Die } from "./Die";
import { AddDieButton } from './AddDieButton';
import { RollDiceButton } from './RollDiceButton';


export const DiceList = ({ dice, addDie, rollDice, rollTotal }) => {

  const diceList = dice.map((die, index) => {
    return (
      <Die die={die} key={index} index={index} />
    )
  })
  return(
    <div className="dice-list">
      {diceList}
      <AddDieButton addDie={addDie}/>
      <RollDiceButton rollDice ={rollDice} />
      <p>Roll Total: {rollTotal}</p>
    </div>
  )
}
