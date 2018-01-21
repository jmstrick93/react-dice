import React from 'react';
import { AddDieButton } from './AddDieButton';
import { RollDiceButton } from './RollDiceButton';
import DieContainer from '../containers/DieContainer';


export const DiceList = ({ dice, addDie, removeDie, rollDice, rollTotal }) => {

  const diceList = dice.map((die, index) => {
    return <DieContainer die={die} key={index} index={index} removeDie={removeDie} />
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
