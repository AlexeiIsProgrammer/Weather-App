import React from 'react';

import { getShortTime } from '../../../utils';
import { Hour } from '../../../interfaces/weather';

import { HourWrapper } from './styles';

type HourProps = {
  hour: Hour;
};

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
