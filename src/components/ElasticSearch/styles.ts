import { styled } from 'styled-components';

export const ElasticSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 100%;

  @media (max-width: 440px) {
    flex-direction: column;
  }
`;
