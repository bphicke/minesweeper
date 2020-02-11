import {
  TOGGLEFLAG,
  CHECKFORMINE,
  RESETBOARD,
  INCREASEBOARDSIZE,
  DECREASEBOARDSIZE
} from '../types';

function toggleFlagAction(index) {
  return { type: TOGGLEFLAG, payload: index };
}

export function toggleFlag(dispatch, index) {
  dispatch(toggleFlagAction(index));
}

function checkForMineAction(index) {
  return { type: CHECKFORMINE, payload: index };
}

export function checkForMine(dispatch, index) {
  dispatch(checkForMineAction(index));
}

function resetBoardAction() {
  return { type: RESETBOARD };
}

export function resetBoard(dispatch) {
  dispatch(resetBoardAction());
}

function increaseBoardSizeAction() {
  return { type: INCREASEBOARDSIZE };
}

export function increaseBoardSize(dispatch) {
  dispatch(increaseBoardSizeAction());
}

function decreaseBoardSizeAction() {
  return { type: DECREASEBOARDSIZE };
}

export function decreaseBoardSize(dispatch) {
  dispatch(decreaseBoardSizeAction());
}
