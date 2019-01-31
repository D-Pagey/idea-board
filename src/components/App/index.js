import React, { Component } from 'react';

import Board from '../Board';
import { STORAGE_KEY } from './constants';
import initialState from './initialState';
import {
  AppWrapper,
  Title,
  AddIcon,
  SortAlpha,
  SortDate,
  SortDiv,
} from './styles';

export default class App extends Component {
  state = {
    tiles: initialState,
  }

  componentDidMount() {
    this.checkLocalStorage();
  }

  checkLocalStorage = () => {
    const storedTiles = localStorage.getItem(STORAGE_KEY);
    if (storedTiles) this.setState({ tiles: JSON.parse(storedTiles) });
  }

  saveStateToLocalStorage = () => {
    const { tiles } = this.state;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tiles));
  }

  sortDate = (array) => {
    const sortedArray = [...array].sort((a, b) => b.date > a.date);
    this.setState({ tiles: sortedArray }, this.saveStateToLocalStorage);
  }

  sortAlpha = (array) => {
    const sortedArray = [...array]
      .sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase());
    this.setState({ tiles: sortedArray }, this.saveStateToLocalStorage);
  }

  handleChange = (index, event) => {
    const { tiles } = this.state;
    const newTiles = [...tiles];

    newTiles[index][event.target.name] = event.target.value;
    newTiles[index].updated = new Date().toLocaleTimeString().slice(0, 5);

    this.setState({ tiles: newTiles }, this.saveStateToLocalStorage);
  }

  deleteTile = (id) => {
    const { tiles } = this.state;
    const updatedTiles = tiles.filter(element => element.id !== id);

    this.setState({ tiles: updatedTiles }, this.saveStateToLocalStorage);
  }

  addTile = () => {
    const { tiles } = this.state;
    const moreTiles = [...tiles, {
      title: `Genius idea #${tiles.length + 1}`,
      description: '',
      date: new Date().toLocaleTimeString().slice(0, 5),
      id: Math.random(),
    }];

    this.setState({ tiles: moreTiles }, this.saveStateToLocalStorage);
  }

  render() {
    const { tiles } = this.state;

    return (
      <AppWrapper>
        <Title>Idea Board</Title>

        <SortDiv>
          <SortAlpha onClick={() => this.sortAlpha(tiles)}>sort_by_alpha</SortAlpha>
          <SortDate onClick={() => this.sortDate(tiles)}>access_time</SortDate>
        </SortDiv>

        {tiles.length > 0 && (
          <Board
            tiles={tiles}
            deleteTile={this.deleteTile}
            handleChange={this.handleChange}
          />
        )}

        <AddIcon onClick={this.addTile}>add_circle_outline</AddIcon>
      </AppWrapper>
    );
  }
}
