import React from 'react';
import SidesOptionsContainer from '../containers/SidesOptionsContainer';


export const Die = ({die, index, removeDie, imgURL}) =>{
  const handleOnClick= () => removeDie(die.id)
  return(
    <div className="die" key={index}>
        <SidesOptionsContainer die={die}/>
      <img className="die-image" height="100" width="100" src= {imgURL}  alt="die" />
      <br/>
      <button className='remove-die-button' onClick={handleOnClick} >
        Remove
      </button>
    </div>
  )
}
