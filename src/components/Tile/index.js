import React from 'react';
import {
  string,
  func,
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
  date,
  deleteTile,
  handleChange,
  title,
  description,
  updated,
}) {
  return (
    <TileWrapper>
      <TileHeader>
        <TitleInput
          defaultValue={title}
          onChange={event => handleChange(event)}
          autoFocus
        />

        <DeleteIcon onClick={deleteTile}>delete</DeleteIcon>
      </TileHeader>

      <TileDescription
        defaultValue={description}
        onChange={event => handleChange(event)}
        type="text"
        placeholder="Start noting your idea..."
        maxLength={140}
      />

      <SubtleDiv>
        <DateStamp>
          {updated ? 'Updated' : 'Created'} at {updated || date}
        </DateStamp>

        {description.length > 120
          && <CharacterCount>Characters left = {140 - description.length}</CharacterCount>}
      </SubtleDiv>
    </TileWrapper>
  );
}

Tile.propTypes = {
  date: string.isRequired,
  deleteTile: func.isRequired,
  handleChange: func.isRequired,
  title: string,
  description: string,
  updated: string,
};

Tile.defaultProps = {
  title: '',
  description: '',
  updated: '',
};
