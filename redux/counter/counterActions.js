import { INCREMENT, DECREMENT, RESET } from '../types';

function incrementCounterAction() {
  return { type: INCREMENT };
}

export function incrementCounter(dispatch) {
  dispatch(incrementCounterAction());
}

function decrementCounterAction() {
  return { type: DECREMENT };
}

export function decrementCounter(dispatch) {
  dispatch(decrementCounterAction());
}

function resetCounterAction() {
  return { type: RESET };
}

export function resetCounter(dispatch) {
  dispatch(resetCounterAction());
}
