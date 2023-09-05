import React from 'react';
import { useAppSelector } from '@hooks/redux';
import weatherSelector from '@store/selectors';
import { isWeatherExists } from '@utils/is-weather-exists';
import CurrentDayItem from '@components/Weather/CurrentDayItem';
import DayItem from '@components/Weather/DayItem';

import { DaysWrapper, DaysList, ErrorMessage } from './styles';

function Days() {
  console.log('days list');
  const { weather, isLoading, error } = useAppSelector(weatherSelector);

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  if (!isWeatherExists(weather) || isLoading) {
    return <ErrorMessage>Weather loading...</ErrorMessage>;
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
