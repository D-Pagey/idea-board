import React, { Component } from 'react';

import { AppWrapper, Title, AddIcon } from './styles';
import initialState from './initialState';
import Board from '../Board';

export default class App extends Component {
  state = {
    tiles: initialState,
  }

  handleChange = (e, id, field) => {
    const { tiles } = this.state;

    const tile = tiles[id];
    tile[field] = e.target.value;
    this.setState({ tiles });
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
    return (
      <AppWrapper>
        <Title>Idea Board</Title>
        <Board
          tiles={tiles}
          deleteTile={this.deleteTile}
          handleChange={this.handleChange}
        />
        <AddIcon onClick={this.addTile}>add_circle_outline</AddIcon>
      </AppWrapper>
    );
  }
}
