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
  tiles,
  deleteTile,
  handleChange,
}) {
  return (
    <BoardWrapper>
      {tiles.map((tile, index) => (
        <Tile
          data={tile}
          key={Math.random()}
          deleteTile={deleteTile}
          handleChange={handleChange}
          index={index}
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
