import styled from 'styled-components';

export const AppWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

export const Title = styled.h1`
font-size: 20px;
margin: 20px 0 10px;
text-align: center;
`;

export const AddIcon = styled.i.attrs({
  className: 'material-icons',
  role: 'button',
  tabIndex: '0',
})`
  cursor: pointer;
  font-size: 30px;
  margin-top: 5px;
`;

export const SortDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  width: 4.5rem;
`;

export const SortAlpha = styled.i.attrs({
  className: 'material-icons',
  role: 'button',
  tabIndex: '0',
})`
  cursor: pointer;
  font-size: 30px;
`;

export const SortDate = styled.i.attrs({
  className: 'material-icons',
  role: 'button',
  tabIndex: '0',
})`
  cursor: pointer;
  font-size: 30px;
`;
