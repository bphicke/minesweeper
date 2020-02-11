import { useDispatch, connect } from 'react-redux';
import {
  resetBoard,
  increaseBoardSize,
  decreaseBoardSize
} from '../redux/gameBoard/gameBoardActions';
import { createSelector } from 'reselect';

const handleResetClick = dispatch => () => {
  resetBoard(dispatch);
};

const handleIncreaseBoardSize = dispatch => () => {
  increaseBoardSize(dispatch);
};

const handleDecreaseBoardSize = dispatch => () => {
  decreaseBoardSize(dispatch);
};

const InputsRoot = ({ boardSize }) => {
  const dispatch = useDispatch();
  const onResetClick = handleResetClick(dispatch);
  const onIncreaseBoardSizeClick = handleIncreaseBoardSize(dispatch);
  const onDecreaseBoardSizeClick = handleDecreaseBoardSize(dispatch);

  return (
    <div style={{ display: 'flex', margin: '8px' }}>
      <button onClick={onResetClick} style={{ marginRight: '8px' }}>
        ResetBoard
      </button>
      <button onClick={onIncreaseBoardSizeClick} style={{ marginRight: '8px' }}>
        +
      </button>
      <div style={{ marginRight: '8px' }}>{`Board Size: ${boardSize}`}</div>
      <button onClick={onDecreaseBoardSizeClick} style={{ marginRight: '8px' }}>
        -
      </button>
    </div>
  );
};

const selectBoardSize = state => state.gameBoard.boardSize;

const getBoardSize = createSelector([selectBoardSize], boardSize => {
  return { boardSize };
});

const connector = connect(getBoardSize);

export const Inputs = connector(InputsRoot);
