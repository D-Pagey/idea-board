import React from 'react';
import styled from 'styled-components';

const TileWrapper = styled.div`
  border: 1px solid black;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  margin: 15px 10px;
  padding: 3px;
`;

const TitleInput = styled.input.attrs({
  type: 'text',
  placeholder: 'Title',
})`
  color: blue;
  font-size: 1.5rem;
  padding: 2px;
  border-radius: 6px;
  border: 0;
`;

const TileDescription = styled.input.attrs({
  type: 'text',
  placeholder: 'Start noting your idea...',
})`
  font-size: 1rem;
  padding: 0;
`;

const DateStamp = styled.p`
  color: darkgray;
  font-size: .7rem;
  margin: 5px 2px 0 ;
`;

export default function Tile({ data }) {
  return (
    <TileWrapper>
      <TitleInput
        defaultValue={data.title}
      />
      <TileDescription
        defaultValue={data.description}
      />
      <DateStamp>
        Created at {data.date}
      </DateStamp>
    </TileWrapper>
  );
}
