import { getFace } from './emojiSelectors';

describe('emoji selectors', () => {
  it('can select emoji', () => {
    const state = 
      { 
        nap: 1,
        snack: 1,
        coffee: 0,
        study: 0 
      };
    expect(getFace(state)).toEqual('😀');
  });

  it('can select emoji for tired and hungry', () => {
    const state = 
      { 
        nap: 0,
        snack: 0,
        coffee: 0,
        study: 0 
      };
    expect(getFace(state)).toEqual('🤬');
  });

  it('can select an emoji for sick', () =>{
    const state = {
      nap: 0,
      coffee: 4,
      snack: 0,
      study: 0
    };

    expect(getFace(state)).toEqual('🤮');
  });

  it('can select an emoji for tired', () =>{
    const state = {
      nap: 0,
      coffee: 0,
      snack: 2,
      study: 0
    };

    expect(getFace(state)).toEqual('😴');
  });

  it('can select an emoji for hyper', () =>{
    const state = {
      nap: 0,
      coffee: 4,
      snack: 2,
      study: 0
    };

    expect(getFace(state)).toEqual('🙀');
  });

  it('can select an emoji for educated', () =>{
    const state = {
      nap: 0,
      coffee: 2,
      snack: 2,
      study: 3
    };

    expect(getFace(state)).toEqual('🤯');
  });

  it('can select an emoji for hungry', () =>{
    const state = {
      nap: 0,
      coffee: 1,
      snack: 0,
      study: 1
    };

    expect(getFace(state)).toEqual('😡');
  });
});
