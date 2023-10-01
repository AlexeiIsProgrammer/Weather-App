import React from 'react';
import { useAppSelector } from '@Hooks/redux';
import weatherSelector from '@Store/selectors';
import { isWeatherExists } from '@Utils/is-weather-exists';
import CurrentDayItem from '@Components/CurrentDayItem';
import DayItem from '@Components/DayItem';

import { DaysList, ErrorMessage } from './styles';

function Days() {
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
    <>
      <CurrentDayItem currentDay={currentDay} />
      <DaysList>
        {weatherDays.map((day, index) => (
          <DayItem key={day.date.toString()} id={index} weather={day} />
        ))}
      </DaysList>
    </>
  );
}

export default React.memo(Days);
