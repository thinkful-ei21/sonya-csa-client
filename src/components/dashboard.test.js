import React from 'react';
import {shallow, mount} from 'enzyme';

import {Dashboard} from './dashboard';

describe(<Dashbaord />, () => {
  it('Renders without crashing', () => {
    shallow(<Dashboard />);
  });

});