import { styled } from 'styled-components';

export const ElasticSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${(props) => props.theme.gap.small};
  width: ${(props) => props.theme.width.full};

  @media (max-width: 440px) {
    flex-direction: column;
  }
`;
