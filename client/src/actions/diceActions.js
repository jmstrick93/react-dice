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


export function changeDie(id, sides) {
  console.log('changeDie action reached:')
  console.log(`id: ${id}, sides: ${sides}`)
  return {
    type: 'CHANGE_DIE',
    id,
    sides
  }
}
