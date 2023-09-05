import React, { useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { getShortTime } from '@utils/index';

import {
  TimeBlock,
  TimeCity,
  TimeClock,
  TimeContainer,
  TimeDate,
} from './styles';
import { TimeProps } from './types/types';

function Time({ city }: TimeProps) {
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

  if (city === '') {
    throw new Error('Errorrrrr');
  }

  return (
    <TimeBlock>
      <ErrorBoundary fallback={<h1>Город не найден был</h1>}>
        <TimeCity>{city}</TimeCity>
      </ErrorBoundary>
      <TimeContainer>
        <TimeClock>{clock}</TimeClock>
        <TimeDate>{date}</TimeDate>
      </TimeContainer>
    </TimeBlock>
  );
}

export default Time;
