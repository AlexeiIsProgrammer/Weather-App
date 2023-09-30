import { styled } from 'styled-components';

export const Events = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: ${(props) => props.theme.height.fullScreen};

  @media screen and (max-width: 1400px) {
    order: 1;
    position: static;
    height: ${(props) => props.theme.height.auto};
    overflow-y: ${(props) => props.theme.overflow.auto};
  }

  overflow-y: ${(props) => props.theme.overflow.auto};
`;

export const EventsListBlock = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: ${(props) => props.theme.gap.medium};
`;
