import React, { useEffect, useState } from 'react';
import { getShortTime } from '../../utils';
import styles from './Time.module.scss';

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
    <div className={styles.time}>
      <div className={styles.time__city}>{city}</div>
      <div className={styles.time__your}>
        <div className={styles.time__clock}>{clock}</div>
        <div className={styles.time__date}>{date}</div>
      </div>
    </div>
  );
}

export default Time;
