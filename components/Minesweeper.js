import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Layout from './layout';
import Desk from './desk';
import { Square } from './Square/Square';
import { Inputs } from './Inputs/Inputs';

const boardMap = (_, index) => {
  return <Square index={index} key={index} />;
};

const MinesweeperRoot = ({ gameStatus, boardSize }) => {
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

const getDerivedGameStatus = (board, boardSize) => {
  let gameStatus = 'active';
  let correctFlagCount = 0;
  let totalFlags = 0;
  board.forEach(square => {
    if (square.revealed && square.mine) gameStatus = 'lost';
    if (square.flag) {
      if (square.mine) {
        correctFlagCount += 1;
      }
      totalFlags += 1;
    }
    if (correctFlagCount === boardSize && totalFlags === boardSize) {
      gameStatus = 'won';
    }
  });
  return gameStatus;
};

const getGameStatus = createSelector([selectGameBoard], gameBoard => {
  const { board, boardSize } = gameBoard;
  const gameStatus = getDerivedGameStatus(board, boardSize);
  return {
    gameStatus,
    boardSize: boardSize
  };
});

const connector = connect(getGameStatus);

export const Minesweeper = connector(MinesweeperRoot);
