import React from 'react';
import { shallow } from 'enzyme';
import each from 'jest-each';

import Tile from '../Tile';
import Board from '.';

const props = {
  tiles: [{
    date: '11:00',
    description: 'BNTI gaming worldwide',
    id: 12345,
    title: 'Nav',
  }],
  deleteTile: () => {},
  handleChange: () => {},
};

describe('Board component', () => {
  it('should render', () => {
    // create / execute
    const wrapper = shallow(<Board {...props} />);
    // assert
    expect(wrapper).toMatchSnapshot();
  });

  each([0, 2, 5, 10]).test('should render with %d tiles', (tileCount) => {
    // mock
    const tiles = Array(tileCount).fill(props.tiles[0]);
    // create / execute
    const wrapper = shallow(<Board {...props} tiles={tiles} />);
    // assert
    expect(wrapper.find(Tile)).toHaveLength(tileCount);
  });

  it('should handle delete tile', () => {
    // mock
    const mock = jest.fn();
    // create
    const wrapper = shallow(<Board {...props} deleteTile={mock} />);
    // execute
    wrapper.find(Tile).props().deleteTile();
    // assert
    expect(mock).toHaveBeenCalledWith(props.tiles[0].id);
  });

  it('should handle change tile', () => {
    // mock
    const tiles = Array(2).fill(props.tiles[0]);
    const mock = jest.fn();
    const mockEvent = {};
    // create
    const wrapper = shallow(<Board {...props} tiles={tiles} handleChange={mock} />);

    wrapper.find(Tile).forEach((node, index) => {
      // execute
      node.props().handleChange(mockEvent);
      // assert
      expect(mock).toHaveBeenLastCalledWith(index, mockEvent);
    });
  });
});
