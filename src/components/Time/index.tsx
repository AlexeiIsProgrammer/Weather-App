import React, { useEffect, useState } from 'react';
import { getShortTime, isWeatherExists } from '@Utils/index';
import { useAppSelector } from '@Hooks/redux';
import weatherSelector from '@Store/selectors';

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
      <TimeCity>{weather.location.name}</TimeCity>
      <TimeContainer>
        <TimeClock>{clock}</TimeClock>
        <TimeDate>{date}</TimeDate>
      </TimeContainer>
    </TimeBlock>
  ) : null;
}

export default Time;
