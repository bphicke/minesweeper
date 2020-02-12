import { combineReducers } from 'redux';
import gameBoard from '../gameBoard/gameBoardReducer';
import moves from '../moves/movesReducer';

const rootState = combineReducers({
  gameBoard,
  moves
});

export default rootState;
