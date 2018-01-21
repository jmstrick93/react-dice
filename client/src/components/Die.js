import React from 'react';
import {RemoveDieButton} from './RemoveDieButton'



export const Die = ({die, index, removeDie, imgURL}) =>{
  const handleOnClick= () => removeDie(die.id)
  return(
    <div className="die" key={index}>
      <img className="die-image" height="100" width="100" src= {imgURL}  alt="6-sided-die" />
      <p>{die.value}</p>
      <button onClick={handleOnClick} >
        Remove
      </button>
    </div>
  )
}
