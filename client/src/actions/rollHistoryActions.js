import fetch from 'isomorphic-fetch';

export function fetchRollHistory(){
  return (dispatch) => {
    dispatch({type: 'START_FETCH_ROLL_HISTORY_REQUEST'});
    return fetch('/api/rollHistory')
    .then(response => {
      debugger;
      return response.json()
    })
    .then(rolls => {
      debugger;
      return dispatch({type: 'FETCH_ROLL_HISTORY', rolls})
    })
  }
}

export function postRollHistory(roll){

  const rollTotal = roll.reduce((computedTotal, die) =>{
    return computedTotal + Number.parseInt(die.value, 10)
  }, 0)
    debugger;

  fetch('/api/rollHistory', {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({dice: roll, total: rollTotal})
  })
  return {type: 'POST_ROLL_HISTORY'}
}
