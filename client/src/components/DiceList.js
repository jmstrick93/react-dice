import React from 'react';
import { AddDieButton } from './AddDieButton';
import { RollDiceButton } from './RollDiceButton';
import { Die } from './Die'
import DieContainer from './DieContainer';


export const DiceList = ({ dice, addDie, rollDice }) => {

  const diceList = dice.map((die, index) => {
    return <Die die={die} key={index} index={index} />
  })
  return(
    <div className="dice-list">
      {diceList}
      <AddDieButton addDie={addDie}/>
      <RollDiceButton rollDice ={rollDice} />
    </div>
  )
}
