import React, { Component } from 'react';

import { AppWrapper, Title, AddIcon } from './styles';
import initialState from './initialState';
import Board from '../Board';

export default class App extends Component {
  state = {
    tiles: [],
  }

  componentDidMount() {
    this.checkLocalStorage();
  }

  saveStateToLocalStorage = () => {
    const { tiles } = this.state;
    console.log(this.state);

    if (tiles.length > 0) {
      localStorage.setItem('tiles', JSON.stringify(tiles));
    }
  }

  checkLocalStorage = () => {
    let newTiles = [];

    if (localStorage.length > 0) {
      newTiles = JSON.parse(localStorage.tiles);
    } else {
      newTiles = initialState;
    }

    return this.setState({ tiles: newTiles });
  }

  handleChange = (index, event) => {
    const newState = Object.assign({}, this.state);
    newState.tiles[index][event.target.name] = event.target.value;

    this.setState(newState);
  }

  deleteTile = (id) => {
    const { tiles } = this.state;

    const updatedTiles = tiles.filter(element => element.id !== id);
    this.setState({ tiles: updatedTiles });
  }

  addTile = () => {
    const { tiles } = this.state;
    const { length } = tiles;

    const newTile = {
      title: `Genius idea #${length + 1}`,
      description: '',
      date: new Date().toLocaleTimeString().slice(0, 5),
      id: length ? tiles[length - 1].id + 1 : 0,
    };

    const moreTiles = [...tiles, newTile];
    this.setState({ tiles: moreTiles });
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
        {content}
        <AddIcon onClick={this.addTile}>add_circle_outline</AddIcon>
      </AppWrapper>
    );
  }
}
