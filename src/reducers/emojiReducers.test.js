import reducer from './emojiReducers';
import { snack, nap, study, coffee } from '../actions/emojiActions';

describe('emoji mood reducer', () => {
  it('handles the SNACK case', () => {
    const action = snack();
    const initialState = { snack: 0 };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ snack: 1 });
  });

  it('handles the NAP case', () => {
    const action = nap();
    const initialState = { nap: 1 };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ nap: 2 });
  });

  it('handles the COFFEE case', () => {
    const action = coffee();
    const initialState = { coffee: 3, nap: 1 };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ coffee: 4, nap: 1 });
  });

  it('handles the STUDY case', () => {
    const action = study();
    const initialState = { coffee: 2, nap: 1, study: 2 };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ coffee: 2, nap: 1, study: 3 });
  });
});
