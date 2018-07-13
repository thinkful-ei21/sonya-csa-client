import React from 'react';
import {shallow, mount} from 'enzyme';

import {BoxContents} from './box-contents';

describe(<BoxContents/>, () => {
  it('Renders without crashing', () => {
    shallow(<BoxContents />);
  });

  /* it('Should delet an item from the list if delete button is clicked, () => {

  }); */

  /* it('Should render the previously saved box contents if they exist', () => {

  }); */ 

  /* it('Should render the added vegetables as a list if there aren't saved contents', () => {

  }); */

  /* it('Should render an empty list if there are not saved or added contents', () => {

  }); */

  
});