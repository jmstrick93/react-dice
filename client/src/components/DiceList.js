import React from 'react';
import { AddDieButton } from './AddDieButton';
import { RollDiceButton } from './RollDiceButton';
import { StartMessage } from './StartMessage';
import DieContainer from '../containers/DieContainer';


export const DiceList = ({ dice, addDie, removeDie, rollDice, rollTotal }) => {

  const diceList = dice.map((die, index) => {
    return (
      <div className='col-auto' key={index}>
        <DieContainer die={die} key={index} index={index} removeDie={removeDie} />
      </div>
    )
  })

  return(
    <div className="dice-list">
      <div className='row justify-content-center'>
        <div className='col'>
          <StartMessage dice={dice} />
          <AddDieButton addDie={addDie}/>
        </div>
      </div>
      <div className="row justify-content-center">
        {diceList}
      </div>
      <div className="row">
        <div className='col'>
          <RollDiceButton rollDice ={rollDice} />
        </div>
      </div>
        <p>Roll Total: {rollTotal}</p>
    </div>
  )
}
