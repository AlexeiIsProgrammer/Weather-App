import { styled } from 'styled-components';

export const DaysWrapper = styled.div``;

export const DaysList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;

  @media screen and (max-width: 991px) {
    overflow-x: auto;
  }
`;
