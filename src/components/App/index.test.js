import React from 'react';
import { shallow } from 'enzyme';

import { STORAGE_KEY } from './constants';
import App from '.';

describe('App component', () => {
  it('should render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should check local storage on mount for tiles', () => {
    const wrapper = shallow(<App />);
    const spy = jest.spyOn(wrapper.instance(), 'checkLocalStorage');
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });

  it('should render tiles from local storage', () => {
    localStorage.getItem.mockImplementationOnce(() => '[]');
    const wrapper = shallow(<App />);
    expect(localStorage.getItem).toHaveBeenCalledWith(STORAGE_KEY);
    expect(wrapper.find(<Board />)).toHaveLength(1);
  });
});

/** Things to test:-
 * CDM - calls checkLocalStorage
 * checkLocalStorage, test it setState with some tiles
 * checkLocalStorage, test it call this.saveStateTo.....
 * saveStateToLocalStorag, test it saves to localStorage
 * sortdate = test it works as intended
 * sortalpha = test it works as intended
 * handleChange = test it works as intended
 * deleteTile = test it works as intended
 * addTile = test it works as intended
 * SortAlhpa = test the onclick
 * SortDate = test the onclick
 * addIcon = test the onclick
 */
