import { useDispatch, connect } from 'react-redux';
import {
  resetBoard,
  increaseBoardSize,
  decreaseBoardSize
} from '../../redux/gameBoard/gameBoardActions';
import { createSelector } from 'reselect';
import { createComponent } from 'cf-style-container';
import { Button } from '../Button';
import { DisplayText } from './DisplayText';

const handleResetClick = dispatch => () => {
  resetBoard(dispatch);
};

const handleIncreaseBoardSize = dispatch => () => {
  increaseBoardSize(dispatch);
};

const handleDecreaseBoardSize = dispatch => () => {
  decreaseBoardSize(dispatch);
};

const InputsContainer = createComponent(
  () => ({
    display: 'flex',
    flexDirection: 'column',
    width: '305px',
    whiteSpace: 'nowrap'
  }),
  'div'
);

const BoardSizeContainer = createComponent(
  () => ({
    display: 'flex',
    width: '305px'
  }),
  'div'
);

const InputsRoot = ({ boardSize, moves }) => {
  const dispatch = useDispatch();
  const onResetClick = handleResetClick(dispatch);
  const onIncreaseBoardSizeClick = handleIncreaseBoardSize(dispatch);
  const onDecreaseBoardSizeClick = handleDecreaseBoardSize(dispatch);

  return (
    <InputsContainer>
      <Button onClick={onResetClick}>Reset Board</Button>
      <BoardSizeContainer>
        <Button onClick={onDecreaseBoardSizeClick}>-</Button>
        <DisplayText>{`Board Size: ${boardSize}`}</DisplayText>
        <Button onClick={onIncreaseBoardSizeClick}>+</Button>
      </BoardSizeContainer>
      <DisplayText>{`Moves: ${moves}`}</DisplayText>
    </InputsContainer>
  );
};

const selectBoardSize = state => state.gameBoard.boardSize;
const selectMoves = state => state.moves;

const getBoardSize = createSelector(
  [selectBoardSize, selectMoves],
  (boardSize, moves) => {
    return { boardSize, moves };
  }
);

const connector = connect(getBoardSize);

export const Inputs = connector(InputsRoot);
