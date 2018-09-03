import React from 'react';
import { arrayOf, any, func } from 'prop-types';

import { BoardWrapper } from './styles';
import Tile from '../Tile';

export default function Board({
  tiles,
  deleteTile,
  handleChange,
}) {
  const renderTiles = tiles.map((tile, index) => {
    return (
      <Tile
        data={tile}
        key={tile.id}
        deleteTile={deleteTile}
        handleChange={handleChange}
        index={index}
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
