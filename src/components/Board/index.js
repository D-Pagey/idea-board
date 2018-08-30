import React from 'react';
import { arrayOf, any, func } from 'prop-types';

import { BoardWrapper } from './styles';
import Tile from '../Tile';

export default function Board({ tiles, deleteTile, addTile }) {
  const renderTiles = tiles
    .map(tile => <Tile data={tile} key={tile.id} deleteTile={deleteTile} />);

  return (
    <BoardWrapper>
      {renderTiles}
      <i
        className="material-icons"
        onClick={addTile}
        role="button"
        tabIndex="0"
      >add_circle_outline
      </i>
    </BoardWrapper>
  );
}

Board.propTypes = {
  tiles: arrayOf(any),
  deleteTile: func.isRequired,
  addTile: func.isRequired,
};

Board.defaultProps = {
  tiles: [],
};
