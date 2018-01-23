import fetch from 'isomorphic-fetch';

export function fetchRollHistory(){
  return (dispatch) => {
    dispatch({type: 'START_FETCH_ROLL_HISTORY_REQUEST'});
    return fetch('/api/rollHistory')
    .then(response => response.json())
    .then(rolls => dispatch({type: 'FETCH_ROLL_HISTORY', rolls}))
  }
}
