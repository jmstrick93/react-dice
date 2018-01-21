import React from 'react';
import {RemoveDieButton} from './RemoveDieButton'



export const Die = ({die, index, removeDie}) =>{
  const dieImageURL=`images/6-sided-die/side-${die.value}.png`

  const handleOnClick= () => removeDie(die.id)
  return(
    <div className="die" key={index}>
      <img className="die-image" height="100" width="100" src={dieImageURL} alt="die side 6" />
      <p>{die.value} - {index}</p>
      <button onClick={handleOnClick} >
        Remove
      </button>
    </div>
  )
}
