import React from 'react';
import { arrayOf, any, func } from 'prop-types';

import { BoardWrapper } from './styles';
import Tile from '../Tile';

export default function Board({
  tiles,
  deleteTile,
  handleChange,
}) {
  const renderTiles = tiles.map((tile) => {
    return (
      <Tile
        data={tile}
        key={tile.id}
        deleteTile={deleteTile}
        handleChange={handleChange}
      />
    );
  });

  return (
    <BoardWrapper>
      {renderTiles}
    </BoardWrapper>
  );
}

Board.propTypes = {
  tiles: arrayOf(any),
  deleteTile: func.isRequired,
  handleChange: func.isRequired,
};

Board.defaultProps = {
  tiles: [],
};
