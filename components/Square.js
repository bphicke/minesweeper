import SquareContainer from './squareContainer';
import Mine from './mine';
import Flag from './flag';
import { connect, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import {
  toggleFlag,
  checkForMine,
  revealAll
} from '../redux/gameBoard/gameBoardActions';
import { useEffect } from 'react';

const handleOnContextMenu = (dispatch, index) => e => {
  e.preventDefault();
  toggleFlag(dispatch, index);
};

const handleOnClick = (dispatch, index) => () => {
  checkForMine(dispatch, index);
};

const getAdjacent = adjacent => {
  return adjacent ? `${adjacent}` : '';
};

const SquareRoot = ({ squareState }) => {
  const { revealed, adjacent, flag, mine, id } = squareState;
  const dispatch = useDispatch();
  const onContextMenu = handleOnContextMenu(dispatch, id);
  const onClick = handleOnClick(dispatch, id);

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
      {revealed && (mine ? <Mine /> : getAdjacent(adjacent))}
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
