import { initialSquare } from './gameBoardReducer';

const setAdjacent = (index, board, boardSize) => {
  //previous row
  const prevRow = index - boardSize;
  if (prevRow > -1) {
    board[prevRow].adjacent += 1;
  }
  if (prevRow - 1 > -1 && (prevRow - 1) % boardSize !== boardSize - 1) {
    board[prevRow - 1].adjacent += 1;
  }
  if (prevRow + 1 > -1 && (prevRow + 1) % boardSize !== 0) {
    board[prevRow + 1].adjacent += 1;
  }

  //inline
  if (index - 1 > -1 && (index - 1) % boardSize !== boardSize - 1) {
    board[index - 1].adjacent += 1;
  }
  if ((index + 1) % boardSize !== 0) {
    board[index + 1].adjacent += 1;
  }

  //next row
  const nextRow = index + boardSize;
  const squares = boardSize * boardSize;
  if (nextRow < squares) {
    board[nextRow].adjacent += 1;
  }
  if (nextRow - 1 < squares && (nextRow - 1) % boardSize !== boardSize - 1) {
    board[nextRow - 1].adjacent += 1;
  }
  if (nextRow + 1 < squares && (nextRow + 1) % boardSize !== 0) {
    board[nextRow + 1].adjacent += 1;
  }
};

export const reveal = (state, board, index) => {
  const alreadyRevealed = board[index].revealed;
  if (!board[index].revealed && !board[index].flag) {
    board[index] = {
      ...state.board[index],
      revealed: true
    };
  }

  if (!board[index].adjacent && !board[index].flag && !alreadyRevealed) {
    //previous row
    const boardSize = state.boardSize;
    const prevRow = index - boardSize;
    if (prevRow > -1) {
      reveal(state, board, prevRow);
    }
    if (prevRow - 1 > -1 && (prevRow - 1) % boardSize !== boardSize - 1) {
      reveal(state, board, prevRow - 1);
    }
    if (prevRow + 1 > -1 && (prevRow + 1) % boardSize !== 0) {
      reveal(state, board, prevRow + 1);
    }
    //inline
    if (index - 1 > -1 && (index - 1) % boardSize !== boardSize - 1) {
      reveal(state, board, index - 1);
    }
    if ((index + 1) % boardSize !== 0) {
      reveal(state, board, index + 1);
    }
    //next row
    const nextRow = index + boardSize;
    const squares = boardSize * boardSize;
    if (nextRow < squares) {
      reveal(state, board, nextRow);
    }
    if (nextRow - 1 < squares && (nextRow - 1) % boardSize !== boardSize - 1) {
      reveal(state, board, nextRow - 1);
    }
    if (nextRow + 1 < squares && (nextRow + 1) % boardSize !== 0) {
      reveal(state, board, nextRow + 1);
    }
  }
};

const getRandomIndex = max => {
  return Math.floor(Math.random() * max);
};

export const buildBoard = (boardSize = 10) => {
  const squares = boardSize * boardSize;
  const board = [...Array(squares).keys()].map((_, index) => {
    return { ...initialSquare, id: index };
  });

  let randomMine;
  for (let i = 0; i < boardSize; i++) {
    randomMine = getRandomIndex(squares);
    while (board[randomMine].mine) {
      randomMine = getRandomIndex(squares);
    }
    board[randomMine].mine = true;
    board[randomMine].adjacent = 20;
    setAdjacent(randomMine, board, boardSize);
  }

  return board;
};
