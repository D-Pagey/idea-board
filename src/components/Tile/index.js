import React from 'react';
import { objectOf, any, func } from 'prop-types';

import {
  TileWrapper,
  TileHeader,
  TitleInput,
  DeleteIcon,
  TileDescription,
  DateStamp,
  CharacterCount,
  SubtleDiv,
} from './styles';

export default function Tile({ data, deleteTile, handleChange }) {
  const {
    description,
    title,
    date,
    id,
  } = data;

  const charCount = description.length > 120
    ? <CharacterCount>Characters left = {140 - description.length}</CharacterCount>
    : null;

  return (
    <TileWrapper>
      <TileHeader>
        <TitleInput
          defaultValue={title}
          onChange={e => handleChange(e, id, 'title')}
        />
        <DeleteIcon onClick={() => deleteTile(id)}>delete</DeleteIcon>
      </TileHeader>
      <TileDescription
        defaultValue={description}
        onChange={e => handleChange(e, id, 'description')}
      />
      <SubtleDiv>
        <DateStamp>
          Created at {date}
        </DateStamp>
        {charCount}
      </SubtleDiv>
    </TileWrapper>
  );
}

Tile.propTypes = {
  data: objectOf(any).isRequired,
  deleteTile: func.isRequired,
  handleChange: func.isRequired,
};
