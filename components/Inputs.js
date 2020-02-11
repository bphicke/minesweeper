import { useDispatch, connect } from 'react-redux';
import {
  resetBoard,
  increaseBoardSize,
  decreaseBoardSize
} from '../redux/gameBoard/gameBoardActions';
import { createSelector } from 'reselect';
import { createComponent } from 'cf-style-container';

const handleResetClick = dispatch => () => {
  resetBoard(dispatch);
};

const handleIncreaseBoardSize = dispatch => () => {
  increaseBoardSize(dispatch);
};

const handleDecreaseBoardSize = dispatch => () => {
  decreaseBoardSize(dispatch);
};

const Button = createComponent(
  () => ({
    margin: '8px',
    marginLeft: '0px',
    color: '#494949',
    padding: '20px',
    border: '4px solid #494949',
    backgroundColor: '#FFFFFF',
    transition: 'all 0.4s ease 0s',
    fontSize: '18px',
    fontWeight: 600,
    '&:hover': {
      color: '#FFFFFF',
      background: '#F6B93B',
      transition: 'all 0.4s ease 0s'
    }
  }),
  'button',
  ['onClick']
);

const Text = createComponent(
  () => ({
    margin: '8px',
    marginLeft: '0px',
    color: '#494949',
    padding: '20px',
    border: '4px solid #494949',
    backgroundColor: '#FFFFFF',
    fontSize: '18px',
    fontWeight: 600
  }),
  'p'
);

const InputsContainer = createComponent(
  () => ({
    display: 'flex'
  }),
  'div'
);

const InputsRoot = ({ boardSize }) => {
  const dispatch = useDispatch();
  const onResetClick = handleResetClick(dispatch);
  const onIncreaseBoardSizeClick = handleIncreaseBoardSize(dispatch);
  const onDecreaseBoardSizeClick = handleDecreaseBoardSize(dispatch);

  return (
    <InputsContainer>
      <Button onClick={onResetClick}>Reset Board</Button>
      <Button onClick={onDecreaseBoardSizeClick}>-</Button>
      <Text>{`Board Size: ${boardSize}`}</Text>
      <Button onClick={onIncreaseBoardSizeClick}>+</Button>
    </InputsContainer>
  );
};

const selectBoardSize = state => state.gameBoard.boardSize;

const getBoardSize = createSelector([selectBoardSize], boardSize => {
  return { boardSize };
});

const connector = connect(getBoardSize);

export const Inputs = connector(InputsRoot);
