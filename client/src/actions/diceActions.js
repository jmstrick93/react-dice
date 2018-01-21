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
