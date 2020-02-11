import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Layout from './layout';
import Desk from './desk';
import { Square } from './Square';
import { Inputs } from './Inputs';

const boardMap = (_, index) => {
  return <Square index={index} key={index} />;
};

const Minesweeper = ({ gameStatus, boardSize }) => {
  return (
    <Layout title={`Minesweeper (${gameStatus})`}>
      <Inputs />
      <Desk boardSize={boardSize}>
        {[...Array(boardSize * boardSize).keys()].map(boardMap)}
      </Desk>
    </Layout>
  );
};

const selectGameBoard = state => state.gameBoard;

const getGameStatus = createSelector([selectGameBoard], gameBoard => {
  let gameStatus = 'active';
  let correctFlagCount = 0;
  let totalFlags = 0;
  gameBoard.board.forEach(square => {
    if (square.revealed && square.mine) gameStatus = 'lost';
    if (square.flag) {
      if (square.mine) {
        correctFlagCount += 1;
      }
      totalFlags += 1;
    }
  });
  if (
    correctFlagCount === gameBoard.boardSize &&
    totalFlags === gameBoard.boardSize
  ) {
    gameStatus = 'won';
  }

  return {
    gameStatus,
    boardSize: gameBoard.boardSize
  };
});

const connector = connect(getGameStatus);

export const MinesweeperWithRedux = connector(Minesweeper);
