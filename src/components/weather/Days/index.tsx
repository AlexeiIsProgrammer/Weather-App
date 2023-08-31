import React from 'react';

import { Current, Forecastday } from '../../../interfaces/weather';
import DayItem from '../DayItem';
import CurrentDayItem from '../CurrentDayItem';

import { DaysList, DaysWrapper } from './styles';

type DaysProps = {
  weatherDays: Forecastday[];
  currentDay: Current;
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
