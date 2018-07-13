import React from 'react';
import {shallow, mount} from 'enzyme';

import {DateSelector} from './date-selector';

describe(<DateSelector />, () => {
  it('Renders without crashing', () => {
    shallow(<dateSelector />);
  });

});