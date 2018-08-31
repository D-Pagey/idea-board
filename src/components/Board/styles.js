import styled from 'styled-components';

export const BoardWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const AddIcon = styled.i.attrs({
  className: 'material-icons',
  role: 'button',
  tabIndex: '0',
})`
  font-size: 30px;
  margin-top: 5px;
`;
