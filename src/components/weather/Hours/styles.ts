import { styled } from 'styled-components';

export const HoursWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;

  overflow-y: auto;

  @media screen and (max-width: 991px) {
    position: static;
    overflow-x: auto;
    overflow-y: hidden;
    height: auto;
  }
`;

export const HoursList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  @media screen and (max-width: 991px) {
    flex-direction: row;
  }
`;
