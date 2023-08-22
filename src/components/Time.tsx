import React, { useEffect, useState } from 'react';
import { getShortTime } from '../utils';

function Time() {
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
    <>
      <div>{clock}</div>
      <div>{date}</div>
    </>
  );
}

export default Time;
