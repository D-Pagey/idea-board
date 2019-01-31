import styled from 'styled-components';

export const BoardWrapper = styled.div.attrs({
  'data-qa': 'board',
})`
  align-items: center;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
