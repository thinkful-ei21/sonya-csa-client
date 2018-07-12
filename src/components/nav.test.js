import React from 'react';
import {shallow, mount} from 'enzyme';

import {Nav} from './nav';

describe(<Nav />, () => {
  it('Renders without crashing', () => {
    shallow(<Nav />);
  });
  
  it('Renders the Logout button if the user is logged in', () => {
    const wrapper = shallow(<Nav loggedIn={true} />);
    expect(wrapper.find('button').last().hasClass('logout-button')).toEqual(true);
  });

  it('Shoud not render the Logout button if the user is not logged in', () => {
    const wrapper = shallow(<Nav loggedIn={false} />);
    expect(wrapper.find('button').last().hasClass('logout-button')).toEqual(false);
  });

  it('Renders About button initially', () => {
    const wrapper = shallow(<Nav showAbout={false} />);
    expect(wrapper.find('button').hasClass('about-button')).toEqual(true);
  });
  
  it('Should fire the onClick callback when the About button is clicked', () => {
    const callback = jest.fn();
    const wrapper = mount(<Nav showAbout={false} dispatch={callback} />);
    wrapper.find('button').first().simulate('click');
    expect(callback).toHaveBeenCalled();
  });

  it('Should fire the logout callback when the Logout button is clicked', () => {
    const callback = jest.fn();
    const wrapper = mount(<Nav loggedIn={true} dispatch={callback} />);
    wrapper.find('button').last().simulate('click');
    expect(callback).toHaveBeenCalled();
  });

});