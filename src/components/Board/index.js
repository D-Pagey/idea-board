import React from 'react';

import { BoardWrapper } from './styles';
import Tile from '../Tile';

export default function Board({ tiles, deleteTile }) {
  const renderTiles = tiles.map((tile) => {
    return <Tile data={tile} key={tile.id} deleteTile={deleteTile} />;
  });

  return (
    <BoardWrapper>
      {renderTiles}
    </BoardWrapper>
  );
}
