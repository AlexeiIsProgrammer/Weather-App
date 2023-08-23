import React from 'react';
import { Hour } from '../../types/weather';
import { getShortTime } from '../../utils';

type HourProps = {
  hour: Hour;
};

function HourItem({ hour }: HourProps) {
  return (
    <li className="hours__item hour">
      <p className="hour__time">{getShortTime(hour.time, false)}</p>
      <div className="hour__image">
        <img src={hour.condition.icon} alt="weather" />
      </div>
      <p className="hour__temp">
        {hour.temp_c}
        {' '}
        °C
      </p>
    </li>
  );
}

export default HourItem;
