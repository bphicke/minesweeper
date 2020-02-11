import SquareContainer from './squareContainer';
import Mine from './mine';
import Flag from './flag';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

const SquareRoot = ({ squareState }) => {
  let contents = '';
  if (squareState.mine) {
    contents = 'MINE';
  } else if (squareState.flag) {
    contents = 'FLAG';
  } else if (squareState.adjacent) {
    contents = 'ADJACENT';
  }

  return (
    <SquareContainer disabled={squareState.disabled}>
      {contents === 'MINE' && <Mine />}
      {contents === 'FLAG' && <Flag />}
      {contents === 'ADJACENT' ? `${squareState.adjacent}` : ''}
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
