import React from 'react';
import {shallow, mount} from 'enzyme';

import {RequiresLogin} from './requires-login';

describe(<RequiresLogin/>, () => {
  it('Renders without crashing', () => {
    shallow(<RequiresLogin />);
  });

});