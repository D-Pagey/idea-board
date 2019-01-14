import React from 'react';
import { shallow } from 'enzyme';
import each from 'jest-each';

import {
  TitleInput, TileDescription, DeleteIcon, DateStamp, CharacterCount,
} from './styles';
import Tile from '.';

const props = {
  date: '11:00',
  deleteTile: () => {},
  handleChange: () => {},
};

describe('Tile component', () => {
  it('should render', () => {
    const wrapper = shallow(<Tile {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle delete tile', () => {
    const mock = jest.fn();
    const wrapper = shallow(<Tile {...props} deleteTile={mock} />);
    wrapper.find(DeleteIcon).simulate('click');
    expect(mock).toHaveBeenCalled();
  });

  each([TitleInput, TileDescription]).test('should handle change tile', (TargetComponent) => {
    const mock = jest.fn();
    const mockEvent = {};
    const wrapper = shallow(<Tile {...props} handleChange={mock} />);
    wrapper.find(TargetComponent).simulate('change', mockEvent);
    expect(mock).toHaveBeenCalledWith(mockEvent);
  });

  each`
    TargetComponent    | textKey
    ${TitleInput}      | ${'title'} 
    ${TileDescription} | ${'description'}
  `.test('should set correct defaultValues', ({ TargetComponent, textKey }) => {
    const text = 'Some text';
    const newProps = { ...props, [textKey]: text };
    const wrapper = shallow(<Tile {...newProps} />);
    expect(wrapper.find(TargetComponent).prop('defaultValue')).toBe(text);
  });

  it('should have updated date stamp', () => {
    const updated = '11:00';
    const wrapper = shallow(<Tile {...props} updated={updated} />);
    expect(wrapper.find(DateStamp).prop('children').join('')).toBe(`Updated at ${updated}`);
  });

  each`
    characterCount | hasCharacterCount 
    ${119}         | ${false}
    ${120}         | ${false}
    ${121}         | ${true}
  `.test('should render $characterCount character count correctly', ({ characterCount, hasCharacterCount }) => {
    const description = 'x'.repeat(characterCount);
    const wrapper = shallow(<Tile {...props} description={description} />);

    if (hasCharacterCount) {
      expect(wrapper.find(CharacterCount).prop('children').join('')).toBe(`Characters left = ${140 - characterCount}`);
    } else {
      expect(wrapper.find(CharacterCount)).toHaveLength(0);
    }
  });
});
