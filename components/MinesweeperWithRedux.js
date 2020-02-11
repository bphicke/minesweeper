import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Layout from './layout';
import Desk from './desk';
import { Square } from './Square';

const boardMap = (_, index) => {
  return <Square index={index} key={index} />;
};

const Minesweeper = ({ gameStatus, boardSize }) => (
  <Layout title={`Minesweeper (${gameStatus})`}>
    <Desk boardSize={boardSize}>
      {[...Array(boardSize * boardSize).keys()].map(boardMap)}
    </Desk>
  </Layout>
);

const selectGameStatus = state => state.gameStatus;
const selectGameBoard = state => state.gameBoard;

const getGameStatus = createSelector(
  [selectGameStatus, selectGameBoard],
  (gameStatus, gameBoard) => {
    return {
      gameStatus,
      boardSize: gameBoard.boardSize
    };
  }
);

const connector = connect(getGameStatus);

export const MinesweeperWithRedux = connector(Minesweeper);
