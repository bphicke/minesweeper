import {
  RESETBOARD,
  TOGGLEFLAG,
  CHECKFORMINE,
  INCREASEBOARDSIZE,
  DECREASEBOARDSIZE
} from '../types';

const initialState = 0;

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLEFLAG:
    case CHECKFORMINE:
      return state + 1;
    case RESETBOARD:
    case INCREASEBOARDSIZE:
    case DECREASEBOARDSIZE:
      return 0;
    default:
      return state;
  }
}
