import { combineReducers, createStore } from 'redux';
import { diceReducer } from './diceReducer'

const rootReducer = combineReducers({
  dice: diceReducer
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
