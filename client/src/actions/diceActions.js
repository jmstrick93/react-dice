import fetch from 'isomorphic-fetch';

export function addDie(){
  return {
    type: 'ADD_DIE'
  }
}

export function rollDice(){
  return{
    type: 'ROLL_DICE'
  }
}

export function removeDie(id){
  console.log('remove action reached')
  return{
    type: 'REMOVE_DIE',
    id
  }
}


export function addSide(id) {
  console.log('addSide action reached:')
  console.log(`id: ${id}`)
  return {
    type: 'ADD_SIDE',
    id
  }
}
export function removeSide(id) {
  console.log('removeSide action reached:')
  console.log(`id: ${id}`)
  return {
    type: 'REMOVE_SIDE',
    id
  }
}

export function fetchRollHistory(){
  return (dispatch) => {
    dispatch({type: 'START_FETCH_ROLL_HISTORY_REQUEST'});
    return fetch('/api/rollHistory')
    .then(response => response.json())
    .then(rolls => dispatch({type: 'FETCH_ROLL_HISTORY', rolls}))
  }
}
