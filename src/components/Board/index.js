import React from 'react';
import {
  arrayOf,
  func,
  shape,
  string,
  number,
} from 'prop-types';

import { BoardWrapper } from './styles';
import Tile from '../Tile';

export default function Board({
  handleChange,
  deleteTile,
  tiles,
}) {
  return (
    <BoardWrapper>
      {tiles.map((tile, index) => (
        <Tile
          {...tile}
          key={tile.id.toString()}
          deleteTile={() => deleteTile(tile.id)}
          handleChange={event => handleChange(index, event)}
        />
      ))}
    </BoardWrapper>
  );
}

Board.propTypes = {
  tiles: arrayOf(
    shape({
      date: string.isRequired,
      description: string.isRequired,
      id: number.isRequired,
      title: string.isRequired,
    }),
  ),
  deleteTile: func.isRequired,
  handleChange: func.isRequired,
};

Board.defaultProps = {
  tiles: [],
};
