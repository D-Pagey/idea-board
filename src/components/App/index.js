import React, { Component } from 'react';
import styled from 'styled-components';

import Board from '../Board';

const AppWrapper = styled.div`
    padding: 5px;
`;

const Title = styled.h1`
    font-size: 20px;
    margin: 5px 0 10px;
    text-align: center;
`;

export default class App extends Component {
  state = {
    tiles: [{
      title: 'Hello',
      description: 'This is a description',
      date: '28th August',
    },
    {
      title: '2nd tile',
      description: 'I love RB6',
      date: '28th August',
    }],
  }

  render() {
    const { tiles } = this.state;
    return (
      <AppWrapper>
        <Title>Idea Board</Title>
        <Board tiles={tiles} />
      </AppWrapper>
    );
  }
}
