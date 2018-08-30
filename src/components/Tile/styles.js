import styled from 'styled-components';

export const TileWrapper = styled.div`
  border: 1px solid black;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  margin: 15px 10px;
  padding: 3px;
`;

export const TileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const TitleInput = styled.input.attrs({
  type: 'text',
  placeholder: 'Title',
})`
  color: blue;
  font-size: 1.5rem;
  padding: 2px;
  border-radius: 6px;
  border: 0;
  width: 75%;
`;

export const TileDescription = styled.input.attrs({
  type: 'text',
  placeholder: 'Start noting your idea...',
})`
  font-size: 1rem;
  padding: 0;
`;

export const DateStamp = styled.p`
  color: darkgray;
  font-size: .7rem;
  margin: 5px 2px 0 ;
`;
