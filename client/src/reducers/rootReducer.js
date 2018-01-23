import { combineReducers, createStore, applyMiddleware } from 'redux';
import { diceReducer } from './diceReducer'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  dice: diceReducer
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));
