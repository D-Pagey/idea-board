import React from 'react';

import {
  TileWrapper,
  TitleInput,
  TileDescription,
  DateStamp,
} from './styles';

export default function Tile({ data, deleteTile }) {
  return (
    <TileWrapper>
      <div>
        <TitleInput
          defaultValue={data.title}
        />
        <i className="material-icons" onClick={ () => deleteTile(data.id) }>delete</i>
      </div>
      <TileDescription
        defaultValue={data.description}
      />
      <DateStamp>
        Created at {data.date}
      </DateStamp>
    </TileWrapper>
  );
}
