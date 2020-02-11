import { combineReducers } from 'redux';
import gameBoard from '../gameBoard/gameBoardReducer';

const rootState = combineReducers({
  gameBoard
});

export default rootState;
