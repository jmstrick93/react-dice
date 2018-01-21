import uuid from 'uuid';

export function diceReducer(state=[], action){
  switch (action.type) {
    case 'ADD_DIE':
      console.log('Die added!')
      const newDie = {
        id: uuid(),
        value: 6,
        sides: 6
      }
      return state.concat([newDie])

    case 'ROLL_DICE':
      const newState = state.map((die, index) =>{
        die.value = Math.floor(Math.random() * 6)+1
        return die
      })
      console.log('dice rolled!')
      return newState;

    case 'REMOVE_DIE':
      console.log('removeDie dispatched to reducer')
      return state.filter((die, index)=> die.id !== action.id)

    case 'ADD_SIDE':
      console.log('addSide dispatched to reducer')
      return state.map((die, index) => {
        if((die.id == action.id)&&(die.sides < 6)){
          return die.sides++
        }
      })

    default:
      return state;
  }
}
