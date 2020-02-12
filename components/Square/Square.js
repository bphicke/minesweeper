import SquareContainer from './squareContainer';
import Mine from '../mine';
import Flag from '../flag';
import { connect, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import {
  toggleFlag,
  checkForMine,
  revealAll
} from '../../redux/gameBoard/gameBoardActions';
import { useEffect } from 'react';

const handleOnContextMenu = (dispatch, index, revealed) => e => {
  e.preventDefault();
  if (!revealed) {
    toggleFlag(dispatch, index);
  }
};

const handleOnClick = (dispatch, index, revealed) => () => {
  if (!revealed) {
    checkForMine(dispatch, index);
  }
};

const getAdjacentMines = adjacent => {
  return adjacent ? `${adjacent}` : '';
};

const SquareRoot = ({ squareState }) => {
  const { revealed, adjacent, flag, mine, id } = squareState;
  const dispatch = useDispatch();
  const onContextMenu = handleOnContextMenu(dispatch, id, revealed);
  const onClick = handleOnClick(dispatch, id, revealed);

  useEffect(() => {
    if (revealed && mine) {
      revealAll(dispatch);
    }
  }, [revealed, mine]);

  return (
    <SquareContainer
      disabled={revealed}
      onClick={onClick}
      onContextMenu={onContextMenu}
    >
      {revealed && (mine ? <Mine /> : getAdjacentMines(adjacent))}
      {!revealed && flag && <Flag />}
    </SquareContainer>
  );
};

const selectSquare = (state, { index }) => {
  return state.gameBoard.board[index];
};

const makeGetSquareState = () =>
  createSelector([selectSquare], squareState => {
    return { squareState };
  });

const connector = connect(makeGetSquareState);
export const Square = connector(SquareRoot);
