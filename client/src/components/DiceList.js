import React from 'react';
import { AddDieButton } from './AddDieButton';
import { RollDiceButton } from './RollDiceButton';
import DieContainer from '../containers/DieContainer';


export const DiceList = ({ dice, addDie, removeDie, rollDice, rollTotal }) => {

  const diceList = dice.map((die, index) => {
    return (
      <div className='col'>
        <DieContainer die={die} key={index} index={index} removeDie={removeDie} />
      </div>
    )
  })
  return(
    <div className="dice-list">
      <div className="row">
        {diceList}
      </div>
      <AddDieButton addDie={addDie}/>
      <RollDiceButton rollDice ={rollDice} />
      <p>Roll Total: {rollTotal}</p>
    </div>
  )
}
