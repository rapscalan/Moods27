import React, { useReducer } from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import emojiReducer from '../reducers/emojiReducers';
import { getFace } from '../selectors/emojiSelectors';
import { coffee, nap, snack, study } from '../actions/emojiActions';

export default function Moods() {
  
  const initialState =
  {
    nap: 0,
    snack: 0,
    study: 0,
    coffee: 0
  };
  const [state, dispatch] = useReducer(emojiReducer, initialState);

  const actionsArr = [
    { text: 'Drink Coffee', action: () => dispatch(coffee()), count: state.coffee },
    {
      text: 'Take Nap', action: () => dispatch(nap()),
      count: state.nap
    },
    {
      text: 'Eat Snack', action: () => dispatch(snack()),
      count: state.snack
    },
    {
      text: 'Study', action: () => dispatch(study()),
      count: state.study
    }
  ];

  const face = getFace(state);

  return (
    <>
      <Controls actionsArr={actionsArr} />
      <Face emoji={face} />
    </>
  );
}
