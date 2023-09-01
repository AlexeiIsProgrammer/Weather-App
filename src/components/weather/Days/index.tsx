import React from 'react';

import DayItem from '../DayItem';
import CurrentDayItem from '../CurrentDayItem';
import { useAppSelector } from '../../../hooks/redux';
import weatherSelector from '../../../store/selectors';
import { isWeatherExists } from '../../../utils';

import { DaysList, DaysWrapper } from './styles';

function Days() {
  console.log('days list');
  const { weather, isLoading } = useAppSelector(weatherSelector);

  if (!isWeatherExists(weather) || isLoading) {
    return <h1>Идет загрузка погоды...</h1>;
  }

  const currentDay = weather.current;
  const weatherDays = weather.forecast.forecastday;

  return (
    <DaysWrapper>
      <CurrentDayItem currentDay={currentDay} />
      <DaysList>
        {weatherDays.map((day, index) => (
          <DayItem key={day.date.toString()} id={index} weather={day} />
        ))}
      </DaysList>
    </DaysWrapper>
  );
}

export default React.memo(Days);
