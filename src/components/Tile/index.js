import React from 'react';
import {
  shape,
  string,
  func,
  number,
} from 'prop-types';

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

export default function Tile({
  data,
  deleteTile,
  handleChange,
  index,
}) {
  const {
    description,
    title,
    date,
    id,
    updated,
  } = data;

  const charCount = description.length > 120
    ? <CharacterCount>Characters left = {140 - description.length}</CharacterCount>
    : null;

  return (
    <TileWrapper>

      <TileHeader>
        <TitleInput
          defaultValue={title}
          onChange={event => handleChange(index, event)}
          autoFocus
        />
        <DeleteIcon onClick={() => deleteTile(id)}>delete</DeleteIcon>
      </TileHeader>

      <TileDescription
        defaultValue={description}
        onChange={event => handleChange(index, event)}
      />

      <SubtleDiv>
        <DateStamp>
          {updated ? 'Updated' : 'Created'} at {updated || date}
        </DateStamp>
        {charCount}
      </SubtleDiv>

    </TileWrapper>
  );
}

Tile.propTypes = {
  data: shape({
    description: string,
    id: number,
    title: string,
    date: string,
    updated: string,
  }).isRequired,
  deleteTile: func.isRequired,
  handleChange: func.isRequired,
  index: number.isRequired,
};
