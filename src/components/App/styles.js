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
  font-size: 30px;
  margin-top: 5px;
`;
