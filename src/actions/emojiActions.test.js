import {
  SNACK,
  snack,
  NAP,
  nap,
  COFFEE,
  coffee,
  STUDY,
  study
} from './emojiActions';

describe('emoji action creators', () => {
  it('creates an eat snack action', () => {
    const action = snack();

    expect(action).toEqual({ type: SNACK });
  });
  it('creates a nap action', () => {
    const action = nap();

    expect(action).toEqual({ type: NAP });
  });
  it('creates an drink coffee action', () => {
    const action = coffee();

    expect(action).toEqual({ type: COFFEE });
  });
  it('creates a study action', () => {
    const action = study();

    expect(action).toEqual({ type: STUDY });
  });
});
