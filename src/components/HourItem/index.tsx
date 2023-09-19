import React from 'react';

import { HourWrapper } from './styles';
import { HourProps } from './types/types';

import { getShortTime } from '~Utils/get-short-time';

function HourItem({ hour }: HourProps) {
  return (
    <HourWrapper>
      <p>{getShortTime(hour.time, false)}</p>
      <div>
        <img src={hour.condition.icon} alt="weather" />
      </div>
      <p>
        {hour.temp_c}
        °C
      </p>
    </HourWrapper>
  );
}

export default HourItem;
