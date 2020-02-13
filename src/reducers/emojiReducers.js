import {
  SNACK,
  NAP,
  STUDY,
  COFFEE
} from '../actions/emojiActions';

export default function reducer(state, action) {
  switch(action.type) {
    case SNACK:
      return { ...state, snack: state.snack + 1 };
    case NAP:
      return { ...state, nap: state.nap + 1 };
    case STUDY:
      return { ...state, study: state.study + 1 };
    case COFFEE:
      return { ...state, coffee: state.coffee + 1 };
    default:
      return state;
  }
}
