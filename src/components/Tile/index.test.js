import React from 'react';
import { shallow } from 'enzyme';
import Tile from '.';

it('renders without crashing', () => {
  shallow(<Tile />);
});
