import { SETACTIVE, SETLOST, SETWON } from '../types';

function setWonAction() {
  return { type: SETWON };
}

export function setWon(dispatch) {
  dispatch(setWonAction());
}

function setActiveAction() {
  return { type: SETACTIVE };
}

export function setActive(dispatch) {
  dispatch(setActiveAction());
}

function setLostAction() {
  return { type: SETLOST };
}

export function setLost(dispatch) {
  dispatch(setLostAction());
}
