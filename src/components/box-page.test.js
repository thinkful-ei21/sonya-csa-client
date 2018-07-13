import React from 'react';
import {shallow, mount} from 'enzyme';

import {BoxPage} from './box-page';

describe(<BoxPage />, () => {
  it('Renders without crashing', () => {
    shallow(<BoxPage 
      match={{
        params: {
          date: 201801
          }
       }} />);
  });

});