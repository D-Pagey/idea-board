import React from 'react';
import { shallow } from 'enzyme';
import Tile from '.';

const testTile = {
  description: 'test',
  title: 'test',
  date: '11:00',
  id: 1,
  updated: '11:05',
};

it('should render', () => {
  const wrapper = shallow(<Tile
    data={testTile}
    deleteTile={() => {}}
    handleChange={() => {}}
    index={1}
  />);
  expect(wrapper).toMatchSnapshot();
});
