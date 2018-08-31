import React from 'react';
import { objectOf, any, func } from 'prop-types';

import {
  TileWrapper,
  TileHeader,
  TitleInput,
  DeleteIcon,
  TileDescription,
  DateStamp,
} from './styles';

export default function Tile({ data, deleteTile }) {
  return (
    <TileWrapper>
      <TileHeader>
        <TitleInput
          defaultValue={data.title}
        />
        <DeleteIcon onClick={() => deleteTile(data.id)}>delete</DeleteIcon>
      </TileHeader>
      <TileDescription
        defaultValue={data.description}
      />
      <DateStamp>
        Created at {data.date}
      </DateStamp>
    </TileWrapper>
  );
}

Tile.propTypes = {
  data: objectOf(any).isRequired,
  deleteTile: func.isRequired,
};
