import React, { useReducer } from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import emojiReducer from '../reducers/emojiReducers';
import { getFace } from '../selectors/emojiSelectors';
import { coffee, nap, snack, study } from '../actions/emojiActions';
/* You've been provided starter code to work with
use a reducer to manage state
Remove the state declaration in the container
extract code from Moods.js into the appropriate files
create actions, selectors, and reducers*/

//Move this into src/actions
//selectors

//export default function Moods extends Component {
export default function Moods() {
  // const [todos, dispatch] = React.useReducer(todoReducer, initialTodos);
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

  // const [{ count, number }, dispatch] = useReducer(reducer, { count: 0, number: 2 });


  const face = getFace(state);
  // const controlActions = actions.map(action => ({
  //   ...action,
  //   count: this.state[action.stateName]
  // }));

  return (
    <>
      <Controls actionsArr={actionsArr} />
      <Face emoji={face} />
    </>
  );

}
