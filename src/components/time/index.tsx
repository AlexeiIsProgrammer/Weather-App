import React, { useEffect, useState } from 'react';

import { getShortTime } from '../../utils';

import {
  TimeBlock,
  TimeCity,
  TimeClock,
  TimeContainer,
  TimeDate,
} from './styles';

type TimeProps = {
  city: string;
};

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

  return (
    <TimeBlock>
      <TimeCity>{city}</TimeCity>
      <TimeContainer>
        <TimeClock>{clock}</TimeClock>
        <TimeDate>{date}</TimeDate>
      </TimeContainer>
    </TimeBlock>
  );
}

export default Time;
