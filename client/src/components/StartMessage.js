import React from 'react';

export const StartMessage = ({dice}) => {
  if (dice.length === 0){
    return (
      <p>To get started, click 'Add A Die</p>
    )
  } else {
    return null
  }
}
