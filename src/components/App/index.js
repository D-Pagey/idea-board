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
    const newTiles = [...tiles];
    const updatedTiles = newTiles.filter(element => element.id !== id);
    this.setState({ tiles: updatedTiles });
  }

  render() {
    const { tiles } = this.state;
    return (
      <AppWrapper>
        <Title>Idea Board</Title>
        <Board
          tiles={tiles}
          deleteTile={this.deleteTile}
        />
      </AppWrapper>
    );
  }
}
