import { styled } from 'styled-components';

import {
  DayDate, DayImage, DayTemp, DayWrapper,
} from '../DayItem/styles';

export const CurrentDayWrapper = styled(DayWrapper)`
  cursor: default;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding: 10px;
  gap: 10px;
  margin-bottom: 20px;

  &__current &__date {
  }

  &__current &__image img,
  &__current &__image {
  }

  &__current &__temp {
  }
`;

export const CurrentDayDate = styled(DayDate)`
  font-size: 50px;

  @media screen and (max-width: 450px) {
    font-size: 40px;
  }
`;
export const CurrentDayTemp = styled(DayTemp)`
  font-weight: 600;
  font-size: 55px;

  @media screen and (max-width: 450px) {
    font-size: 35px;
  }
`;
export const CurrentDayImage = styled(DayImage)`
  width: 128px;
  height: 128px;

  @media screen and (max-width: 450px) {
    width: 64px;
    height: 64px;
  }
`;

export const CurrentDayImageImg = styled.img`
  width: 128px;
  height: 128px;

  @media screen and (max-width: 450px) {
    width: 64px;
    height: 64px;
  }
`;
