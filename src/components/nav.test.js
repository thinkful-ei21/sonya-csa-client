import React from 'react';
import {shallow, mount} from 'enzyme';

import {Nav} from './nav';

describe(<Nav />, () => {
  it('renders without crashing', () => {
    shallow(<Nav />);
  });
  
  it('renders the logout button if the user is logged in', () => {
    const wrapper = shallow(<Nav loggedIn={true} />);
    expect(wrapper.find('button').last().hasClass('logout-button')).toEqual(true);
  });

  it('renders about button initially', () => {
    const wrapper = shallow(<Nav showAbout={false} />);
    expect(wrapper.find('button').hasClass('about-button')).toEqual(true);
  });
  
});