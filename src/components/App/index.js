import React, { Component } from 'react';

import { AppWrapper, Title } from './styles';
import Board from '../Board';

export default class App extends Component {
  state = {
    tiles: [{
      title: 'Hello',
      description: 'This is a description',
      date: '28th August',
      id: 0,
    },
    {
      title: '2nd tile',
      description: 'I love RB6',
      date: '28th August',
      id: 1,
    }],
  }

  deleteTile = (id) => {
    const { tiles } = this.state;

    const updatedTiles = tiles.filter(element => element.id !== id);
    this.setState({ tiles: updatedTiles });
  }

  addTile = () => {
    const { tiles } = this.state;

    const newTile = {
      title: `Genius idea #${tiles.length + 1}`,
      description: '',
      date: '29th August',
      id: tiles[tiles.length - 1].id + 1,
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
          addTile={this.addTile}
        />
      </AppWrapper>
    );
  }
}
