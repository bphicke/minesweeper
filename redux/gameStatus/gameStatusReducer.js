import { SETACTIVE, SETLOST, SETWON } from '../types';

const initialState = 'active';

export default function(state = initialState, action) {
  switch (action.type) {
    case SETACTIVE:
      return 'active';
    case SETLOST:
      return 'lost';
    case SETWON:
      return 'won';
    default:
      return state;
  }
}
