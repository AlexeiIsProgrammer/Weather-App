import { styled } from 'styled-components';

export const DaysList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.theme.gap.large};
  justify-content: space-between;

  @media screen and (max-width: 991px) {
    overflow-x: ${(props) => props.theme.overflow.auto};
  }
`;

export const ErrorMessage = styled.h1`
  text-align: ${(props) => props.theme.textAlign.center};
`;
