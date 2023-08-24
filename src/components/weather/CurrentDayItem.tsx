import React from 'react';
import styles from './Weather.module.scss';
import { Current } from '../../models/weather';

type CurrentDayProps = {
  currentDay: Current;
};

function CurrentDayItem({ currentDay }: CurrentDayProps) {
  return (
    <div className={`${styles.day} ${styles.day__current}`}>
      <div className={styles.day__image}>
        <img src={currentDay.condition.icon} alt="weather" />
      </div>
      <p className={styles.day__date}>Now</p>
      <span className={styles.day__temp}>
        {currentDay.temp_c}
        °C
      </span>
    </div>
  );
}

export default CurrentDayItem;
