import React from 'react';

import { Current } from '../../../interfaces/weather';

import {
  CurrentDayDate,
  CurrentDayImage,
  CurrentDayImageImg,
  CurrentDayTemp,
  CurrentDayWrapper,
} from './styles';

type CurrentDayProps = {
  currentDay: Current;
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
