import React from 'react';

import {
  CurrentDayDate,
  CurrentDayImage,
  CurrentDayImageImg,
  CurrentDayTemp,
  CurrentDayWrapper,
} from './styles';
import { CurrentDayProps } from './types/types';

function CurrentDayItem({ currentDay }: CurrentDayProps) {
  console.log('current day');

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
