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
      return state.concat([newDie] )

    case 'ROLL_DICE':
      console.log('dice rolled!')
      return state;
    default:
      return state;
  }
}
