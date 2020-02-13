import React from 'react';
import { shallow } from 'enzyme';
import Moods, { isTired, isHyper, isEducated, isHungry, getFace } from '../selectors/emojiSelectors';

describe('Moods', () => {
  describe('mood selectors', () => {
    it('knows if it is tired', () => {
      expect(isTired({ coffee: 0, nap: 0 })).toBeTruthy();
    });

    it('knows if it is not tired', () => {
      expect(isTired({ coffee: 1, nap: 0 })).toBeFalsy();
    });

    it('knows if it is hyper', () => {
      expect(isHyper({ coffee: 4 })).toBeTruthy();
    });

    it('knows if it is not hyper', () => {
      expect(isHyper({ coffee: 3 })).toBeFalsy();
    });

    it('knows if it is educated', () => {
      expect(isEducated({ study: 3 })).toBeTruthy();
    });

    it('knows if it is not educated', () => {
      expect(isEducated({ study: 2 })).toBeFalsy();
    });

    it('knows if it is hungry', () => {
      expect(isHungry({ snack: 0 })).toBeTruthy();
    });

    it('knows if it is not hungry', () => {
      expect(isHungry({ study: 2 })).toBeFalsy();
    });

    it('is very angry if tired and hungry', () => {
      expect(getFace({ coffee: 0, nap: 0, snack: 0 })).toEqual('🤬');
    });

    it('is sick if hyper and hungry', () => {
      expect(getFace({ coffee: 4, snack: 0 })).toEqual('🤮');
    });

    it('is sleeping if tired', () => {
      expect(getFace({ coffee: 0, nap: 0 })).toEqual('😴');
    });

    it('is crazy if hyper', () => {
      expect(getFace({ coffee: 4, nap: 0, snack: 1, study: 0 })).toEqual('🙀');
    });

    it('is mindblown if educated', () => {
      expect(getFace({ coffee: 1, nap: 0, snack: 1, study: 3 })).toEqual('🤯');
    });

    it('is angry if hungry', () => {
      expect(getFace({ coffee: 1, nap: 0, snack: 0, study: 0 })).toEqual('😡');
    });

    it('is happy if not tired, hungry, educated, or hungry', () => {
      expect(getFace({ coffee: 1, nap: 0, snack: 1, study: 0 })).toEqual('😀');
    });
  });

  // describe('container', () => {
  //   it('matches a snapshot', () => {
  //     const wrapper = shallow(<Moods />);
  //     expect(wrapper).toMatchSnapshot();
  //   });

    // it('updates state on DRINK_COFFEE selection', () => {
    //   const wrapper = shallow(<Moods />);
    //   wrapper.instance().handleSelect('COFFEE');
    //   console.log(wrapper);
    //   console.log(wrapper.state);
    //   expect(wrapper.state('coffee')).toEqual(1);
    // });

    // it('updates state on NAP selection', () => {
    //   const wrapper = shallow(<Moods />);
    //   wrapper.instance().handleSelect('NAP');

    //   expect(wrapper.state('nap')).toEqual(1);
    // });

    // it('updates state on SNACK selection', () => {
    //   const wrapper = shallow(<Moods />);
    //   wrapper.instance().handleSelect('SNACK');

    //   expect(wrapper.state('snack')).toEqual(1);
    // });

  //   it('updates state on STUDY selection', () => {
  //     const wrapper = shallow(<Moods />);
  //     wrapper.instance().handleSelect('STUDY');

  //     expect(wrapper.state('study')).toEqual(1);
  //   });
  // });
});
