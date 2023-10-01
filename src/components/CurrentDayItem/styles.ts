import { styled } from 'styled-components';

import {
  DayDate, DayImage, DayTemp, DayWrapper,
} from '../DayItem/styles';

export const CurrentDayWrapper = styled(DayWrapper)`
  cursor: default;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding: ${(props) => props.theme.padding.medium};
  gap: ${(props) => props.theme.gap.small};
  margin-bottom: ${(props) => props.theme.margin.medium};
`;

export const CurrentDayDate = styled(DayDate)`
  font-size: ${(props) => props.theme.fontSizes.em.large};

  @media screen and (max-width: 450px) {
    font-size: ${(props) => props.theme.fontSizes.em.medium};
  }
`;
export const CurrentDayTemp = styled(DayTemp)`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.em.large};

  @media screen and (max-width: 450px) {
    font-size: ${(props) => props.theme.fontSizes.em.medium};
  }
`;
export const CurrentDayImage = styled(DayImage)`
  width: ${(props) => props.theme.iconSize.large};
  height: ${(props) => props.theme.iconSize.large};

  @media screen and (max-width: 450px) {
    width: ${(props) => props.theme.iconSize.small};
    height: ${(props) => props.theme.iconSize.small};
  }
`;

export const CurrentDayImageImg = styled.img`
  width: ${(props) => props.theme.iconSize.large};
  height: ${(props) => props.theme.iconSize.large};

  @media screen and (max-width: 450px) {
    width: ${(props) => props.theme.iconSize.small};
    height: ${(props) => props.theme.iconSize.small};
  }
`;
