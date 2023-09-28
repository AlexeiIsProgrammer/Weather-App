import { styled } from 'styled-components';

export const DaysList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;

  @media screen and (max-width: 991px) {
    overflow-x: auto;
  }
`;

export const ErrorMessage = styled.h1`
  text-align: center;
`;
