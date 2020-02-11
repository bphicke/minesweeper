const initialSquare = {
  id: 0,
  mine: false,
  flag: false,
  adjacent: 0,
  disabled: false,
  revealed: false
};

const getRandomIndex = max => {
  return Math.floor(Math.random() * max);
};

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
  if ((index - 1) % boardSize !== boardSize - 1) {
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

const buildBoard = (boardSize = 10) => {
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
    setAdjacent(randomMine, board, boardSize);
  }

  return board;
};

const initialState = {
  boardSize: 10,
  board: buildBoard()
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
