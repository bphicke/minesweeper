import { combineReducers } from 'redux';
import counter from '../counter/counterReducer';
import gameStatus from '../gameStatus/gameStatusReducer';
import gameBoard from '../gameBoard/gameBoardReducer';

const rootState = combineReducers({
  counter,
  gameStatus,
  gameBoard
});

export default rootState;
