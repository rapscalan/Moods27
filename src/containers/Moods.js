import React, { Component } from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
/* You've been provided starter code to work with
use a reducer to manage state
Remove the state declaration in the container
extract code from Moods.js into the appropriate files
create actions, selectors, and reducers*/

//Move this into src/actions
const actions = [
  { name: 'DRINK_COFFEE', text: 'Drink Coffee', stateName: 'coffees' },
  { name: 'EAT_SNACK', text: 'Snack', stateName: 'snacks' },
  { name: 'TAKE_NAP', text: 'Nap', stateName: 'naps' },
  { name: 'STUDY', text: 'Study', stateName: 'studies' },
];

export const isTired = state => state.coffees < 1 && state.naps < 1;
export const isHyper = state => state.coffees > 3;
export const isEducated = state => state.studies > 2;
export const isHungry = state => state.snacks < 1;

export const getFace = state => {
  if(isTired(state) && isHungry(state)) return '🤬';
  if(isHyper(state) && isHungry(state)) return '🤮';
  if(isTired(state)) return '😴';
  if(isHyper(state)) return '🙀';
  if(isEducated(state)) return '🤯';
  if(isHungry(state)) return '😡';

  return '😀';
};

export default class Moods extends Component {
  // state = {
  //   coffees: 0,
  //   snacks: 0,
  //   naps: 0,
  //   studies: 0
  // }

  handleSelection = name => {
    switch(name) {
      case 'DRINK_COFFEE':
        this.setState(state => ({ coffees: state.coffees + 1 }));
        break;
      case 'EAT_SNACK':
        this.setState(state => ({ snacks: state.snacks + 1 }));
        break;
      case 'TAKE_NAP':
        this.setState(state => ({ naps: state.naps + 1 }));
        break;
      case 'STUDY':
        this.setState(state => ({ studies: state.studies + 1 }));
        break;
      default:
        console.log(`unhandled name: ${name}`);
    }
  }

  render() {
    const face = getFace(this.state);
    const controlActions = actions.map(action => ({
      ...action,
      count: this.state[action.stateName]
    }));

    return (
      <>
        <Controls actions={controlActions} handleSelection={this.handleSelection}/>
        <Face emoji={face} />
      </>
    );
  }
}
