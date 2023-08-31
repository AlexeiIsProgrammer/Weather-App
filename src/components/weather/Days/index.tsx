import React from 'react';

import { CurrentDayWeather, Forecastday } from '../../../interfaces';
import DayItem from '../DayItem';
import CurrentDayItem from '../CurrentDayItem';

import { DaysList, DaysWrapper } from './styles';

type DaysProps = {
  weatherDays: Forecastday[];
  currentDay: CurrentDayWeather;
};

function Days({ currentDay, weatherDays }: DaysProps) {
  return (
    <DaysWrapper>
      <CurrentDayItem currentDay={currentDay} />
      <DaysList>
        {weatherDays.map((day, index) => (
          <DayItem key={day.toString()} id={index} weather={day} />
        ))}
      </DaysList>
    </DaysWrapper>
  );
}

export default Days;
