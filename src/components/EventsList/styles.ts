import { styled } from 'styled-components';

export const Events = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;

  @media screen and (max-width: 1400px) {
    order: 1;
    position: static;
    height: auto;
    overflow-y: auto;
  }

  overflow-y: auto;
`;

export const EventsListBlock = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 15px;
`;
