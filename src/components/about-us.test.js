import React from 'react';
import {shallow, mount} from 'enzyme';

import {About} from './about-us';

describe(<About />, () => {
  it('Renders without crashing', () => {
    shallow(<About />);
  });

  it('Should fire onClick callback when button is clicked', () => {
    const callback = jest.fn();
    const wrapper = mount(<About showAbout={true} dispatch={callback} />);
    wrapper.find('button').simulate('click');
    expect(callback).toHaveBeenCalled();
  });

});

  