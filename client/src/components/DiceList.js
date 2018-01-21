import React from 'react';
import { AddDieButton } from './AddDieButton';
import { RollDiceButton } from './RollDiceButton';
import DieContainer from '../containers/DieContainer';


export const DiceList = ({ dice, addDie, removeDie, rollDice, rollTotal }) => {

  const diceList = dice.map((die, index) => {
    return (
      <div className='col-auto'>
        <DieContainer die={die} key={index} index={index} removeDie={removeDie} />
      </div>
    )
  })
  return(
    <div className="dice-list">
      <div className="row">
        {diceList}
      </div>
      <div className="row">
        <div className='col'><AddDieButton addDie={addDie}/>
        <RollDiceButton rollDice ={rollDice} /></div>
      </div>
        <p>Roll Total: {rollTotal}</p>
    </div>
  )
}
