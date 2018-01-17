export function diceReducer(state=[], action){
  switch (action.type) {
    case 'ADD_DIE':
      console.log('Die added!')
      const newDie = {
        value: 6,
        sides: 6
      }
      return {... state, newDie };
    case 'ROLL_DICE':
      console.log('dice rolled!')
      return state;
    default:
      return state;
  }
}
