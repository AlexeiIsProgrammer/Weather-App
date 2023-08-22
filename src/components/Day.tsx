import React from 'react';
import { Forecastday } from '../types/weather';
import { getWeekDay } from '../utils';

type DayProps = {
  weather: Forecastday;
};

function Day({ weather }: DayProps) {
  return (
    <div>
      <div>{getWeekDay(weather.date)}</div>
      <div>
        <img src={weather.day.condition.icon} alt="weather" />
      </div>
      <div>
        {weather.day.avgtemp_c}
        {' '}
        *C
      </div>
    </div>
  );
}

export default Day;
