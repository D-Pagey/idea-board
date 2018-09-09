import React, { Component } from 'react';

import {
  AppWrapper,
  Title,
  AddIcon,
  SortAlpha,
  SortDate,
  SortDiv,
} from './styles';
import initialState from './initialState';
import Board from '../Board';

export default class App extends Component {
  state = {
    tiles: [],
  }

  componentDidMount() {
    this.checkLocalStorage();
  }

  checkLocalStorage = () => {
    let newTiles = [];

    if (localStorage.length > 0) {
      newTiles = JSON.parse(localStorage.tiles);
    } else {
      newTiles = initialState;
    }

    return this.setState({ tiles: newTiles }, this.saveStateToLocalStorage);
  }

  saveStateToLocalStorage = () => {
    const { tiles } = this.state;

    if (tiles.length > 0) {
      localStorage.setItem('tiles', JSON.stringify(tiles));
    }
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
    const newState = Object.assign({}, this.state);
    newState.tiles[index][event.target.name] = event.target.value;
    newState.tiles[index].updated = new Date().toLocaleTimeString().slice(0, 5);

    this.setState(newState, this.saveStateToLocalStorage);
  }

  deleteTile = (id) => {
    const { tiles } = this.state;

    const updatedTiles = tiles.filter(element => element.id !== id);
    if (updatedTiles.length === 0) {
      localStorage.removeItem('tiles');
    }
    this.setState({ tiles: updatedTiles }, this.saveStateToLocalStorage);
  }

  addTile = () => {
    const { tiles } = this.state;
    const { length } = tiles;

    const newTile = {
      title: `Genius idea #${length + 1}`,
      description: '',
      date: new Date().toLocaleTimeString().slice(0, 5),
      id: Math.random(),
    };

    const moreTiles = [...tiles, newTile];
    this.setState({ tiles: moreTiles }, this.saveStateToLocalStorage);
  }

  render() {
    const { tiles } = this.state;

    const content = tiles.length > 0
    && (
    <Board
      tiles={tiles}
      deleteTile={this.deleteTile}
      handleChange={this.handleChange}
    />);

    return (
      <AppWrapper>
        <Title>Idea Board</Title>
        <SortDiv>
          <SortAlpha onClick={() => this.sortAlpha(tiles)}>sort_by_alpha</SortAlpha>
          <SortDate onClick={() => this.sortDate(tiles)}>access_time</SortDate>
        </SortDiv>
        {content}
        <AddIcon onClick={this.addTile}>add_circle_outline</AddIcon>
      </AppWrapper>
    );
  }
}
