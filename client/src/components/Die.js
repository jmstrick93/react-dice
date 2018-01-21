import React from 'react';


export const Die = ({die, index, removeDie, imgURL}) =>{
  const handleOnClick= () => removeDie(die.id)
  return(
    <div className="die" key={index}>
      <p>{die.value}</p>
      <img className="die-image" height="100" width="100" src= {imgURL}  alt="die-image" />
      <br/>
      <button onClick={handleOnClick} >
        Remove
      </button>
    </div>
  )
}
