import uuid from 'uuid';

export function rollHistoryReducer(state=[], action){
  switch (action.type) {
    case 'FETCH_ROLL_HISTORY':
      console.log('displayRollHistory dispatched to reducer')
      return action.rolls;

    case 'SAVE_ROLL_HISTORY':
      return state;

    default:
      return state;
    }
  }
