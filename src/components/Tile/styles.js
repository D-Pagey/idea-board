import styled from 'styled-components';

export const TileWrapper = styled.div`
  background-color: white;
  border: 1px solid darkgray;
  border-radius: 6px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  display: flex;
  flex-direction: column;
  margin: 15px 10px;
  padding: 4px 7px;
`;

export const TileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const TitleInput = styled.input.attrs({
  type: 'text',
  placeholder: 'Title',
  name: 'title',
})`
  color: black;
  font-size: 1.5rem;
  padding: 2px;
  border-radius: 6px;
  border: 0;
  width: 75%;
`;

export const DeleteIcon = styled.i.attrs({
  className: 'material-icons',
  role: 'button',
  tabIndex: '0',
})`
  position: relative;
  top: 3px;
`;

export const TileDescription = styled.textarea.attrs({
  type: 'text',
  placeholder: 'Start noting your idea...',
  maxLength: 140,
  name: 'description',
})`
  font-family: 'Montserrat';
  font-size: .9rem;
  margin: 4px 0;
  padding: 3px 2px;
`;

export const SubtleDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DateStamp = styled.p`
  color: darkgray;
  font-size: .7rem;
  margin: 5px 2px 0;
`;

export const CharacterCount = styled.p`
  color: darkgray;
  font-size: .7rem;
  margin: 5px 2px 0;
`;
