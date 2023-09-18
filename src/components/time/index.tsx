import React, { useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { getShortTime, isWeatherExists } from '@utils/index';
import { useAppSelector } from '@hooks/redux';
import weatherSelector from '@store/selectors';

import {
  TimeBlock,
  TimeCity,
  TimeClock,
  TimeContainer,
  TimeDate,
} from './styles';

function Time() {
  const { weather } = useAppSelector(weatherSelector);
  const [clock, setClock] = useState<string>(getShortTime(new Date()));
  const [date, setDate] = useState<string>(new Date().toDateString());

  useEffect(() => {
    const ONE_SECOND = 1000;

    setInterval(() => {
      const newDate = new Date();
      const newTime = getShortTime(newDate);
      setClock(newTime);
      setDate(newDate.toDateString());
    }, ONE_SECOND);
  }, []);

  return isWeatherExists(weather) ? (
    <TimeBlock>
      <ErrorBoundary fallback={<h1>Город не был найден</h1>}>
        <TimeCity>{weather.location.name}</TimeCity>
      </ErrorBoundary>
      <TimeContainer>
        <TimeClock>{clock}</TimeClock>
        <TimeDate>{date}</TimeDate>
      </TimeContainer>
    </TimeBlock>
  ) : null;
}

export default Time;
