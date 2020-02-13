import React from 'react';
import { shallow } from 'enzyme';
import Controls from './Controls';

describe('Controls component', () => {
  let wrapper;
  let handleSelect;
  beforeEach(() => {
    const actions = [
      { name: 'DO_STUFF', text: 'stuff' },
      { name: 'other' }
    ];
    handleSelect = jest.fn('');

    wrapper = shallow(<Controls
      actionsArr={actions}
      handleSelect={handleSelect} />);
  });

  it('renders Controls', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // it('handlesSelection with the action name', () => {
  //   wrapper.findWhere(el => el.key() === 'DO_STUFF').simulate('click');
  //   expect(handleSelect).toHaveBeenCalledWith('DO_STUFF');
  // });
});

