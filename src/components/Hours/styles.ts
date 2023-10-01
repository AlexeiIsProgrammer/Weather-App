import { styled } from 'styled-components';

export const HoursWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: ${(props) => props.theme.height.fullScreen};

  overflow-y: ${(props) => props.theme.overflow.auto};

  @media screen and (max-width: 991px) {
    position: static;
    overflow-x: ${(props) => props.theme.overflow.auto};
    overflow-y: ${(props) => props.theme.overflow.hidden};
    height: ${(props) => props.theme.height.auto};
  }
`;

export const HoursList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.gap.small};
  align-items: center;

  @media screen and (max-width: 991px) {
    flex-direction: row;
  }
`;
