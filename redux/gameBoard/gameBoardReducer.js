import {
  TOGGLEFLAG,
  CHECKFORMINE,
  RESETBOARD,
  INCREASEBOARDSIZE,
  DECREASEBOARDSIZE,
  REVEALALL
} from '../types';
import { reveal, buildBoard } from './gameBoardHelpers';

export const initialSquare = {
  id: 0,
  mine: false,
  flag: false,
  adjacent: 0,
  disabled: false,
  revealed: false
};

const initialState = {
  boardSize: 10,
  board: buildBoard()
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REVEALALL: {
      const newState = {
        ...state,
        board: state.board.map(square => {
          return {
            ...square,
            revealed: true
          };
        })
      };
      return newState;
    }
    case INCREASEBOARDSIZE:
      return {
        ...state,
        boardSize: state.boardSize + 1,
        board: buildBoard(state.boardSize + 1)
      };
    case DECREASEBOARDSIZE: {
      let nextBoardSize = state.boardSize - 1;
      if (nextBoardSize < 3) nextBoardSize = 3;
      return {
        ...state,
        boardSize: nextBoardSize,
        board: buildBoard(nextBoardSize)
      };
    }
    case CHECKFORMINE: {
      const newState = {
        ...state,
        board: [...state.board]
      };
      reveal(state, newState.board, action.payload);
      return newState;
    }
    case TOGGLEFLAG:
      return {
        ...state,
        board: [
          ...state.board.slice(0, action.payload),
          {
            ...state.board[action.payload],
            flag: !state.board[action.payload].flag
          },
          ...state.board.slice(action.payload + 1)
        ]
      };
    case RESETBOARD:
      return {
        ...state,
        board: buildBoard(state.boardSize)
      };
    default:
      return state;
  }
}
