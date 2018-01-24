import fetch from 'isomorphic-fetch';

export function fetchRollHistory(){
  return (dispatch) => {
    dispatch({type: 'START_FETCH_ROLL_HISTORY_REQUEST'});
    return fetch('/api/rollHistory')
    .then(response => response.json())
    .then(rolls => dispatch({type: 'FETCH_ROLL_HISTORY', rolls}))
  }
}

export function postRollHistory(roll){
  fetch('/api/rollHistory', {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({dice: roll})
  })
  return {type: 'POST_ROLL_HISTORY'}
}
