import React from 'react';

export const Die = ({die, index}) =>{
  const dieImageURL=`images/6-sided-die/side-${die.value}.png`

  return(
    <div className="die" key={index}>
      <img className="die-image" height="100" width="100" src={dieImageURL} alt="die side 6" />
      <p>{die.value} - {index}</p>
    </div>
  )
}
