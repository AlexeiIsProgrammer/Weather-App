import React from 'react';

import { CurrentDayWeather } from '../../../interfaces';

import {
  CurrentDayDate,
  CurrentDayImage,
  CurrentDayImageImg,
  CurrentDayTemp,
  CurrentDayWrapper,
} from './styles';

type CurrentDayProps = {
  currentDay: CurrentDayWeather;
};

function CurrentDayItem({ currentDay }: CurrentDayProps) {
  return (
    <CurrentDayWrapper>
      <CurrentDayImage>
        <CurrentDayImageImg src={currentDay.condition.icon} alt="weather" />
      </CurrentDayImage>
      <CurrentDayDate>Now</CurrentDayDate>
      <CurrentDayTemp>
        {currentDay.temp_c}
        °C
      </CurrentDayTemp>
    </CurrentDayWrapper>
  );
}

export default CurrentDayItem;
