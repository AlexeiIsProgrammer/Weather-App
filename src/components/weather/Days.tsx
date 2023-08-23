import React from 'react';
import { Forecastday } from '../../types/weather';
import DayItem from './DayItem';
import './weather.scss';

type DaysProps = {
  weatherDays: Forecastday[];
};

function Days({ weatherDays }: DaysProps) {
  return (
    <div className="days">
      <div className="days__list">
        {weatherDays.map((day) => (
          <DayItem key={Math.random()} weather={day} />
        ))}
      </div>
    </div>
  );
}

export default Days;
