import React from 'react';
import styled from 'styled-components';

import Tile from '../Tile';

const BoardWrapper = styled.div`

`;

export default function Board({ tiles }) {
  const renderTiles = tiles.map(tile => <Tile data={tile} />);

  return (
    <BoardWrapper>
      {renderTiles}
    </BoardWrapper>
  );
}
