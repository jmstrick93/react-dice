import React from 'react';

export const Die = ({die, index}) =>{
  return(
    <div className="die" key={index}>
      {die.value} - {index}
    </div>
  )


}
