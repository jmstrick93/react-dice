import React from 'react';
import { AddDieButton } from './AddDieButton';
import { RollDiceButton } from './RollDiceButton';
import DieContainer from './DieContainer';


export const DiceList = ({ dice, addDie, rollDice, rollTotal }) => {

  const diceList = dice.map((die, index) => {
    return <DieContainer die={die} key={index} index={index} />
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
