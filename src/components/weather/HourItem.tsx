import React from 'react';
import { Hour } from '../../types/weather';
import { getShortTime } from '../../utils';
import styles from './Weather.module.scss';

type HourProps = {
  hour: Hour;
};

function HourItem({ hour }: HourProps) {
  return (
    <li className={styles.hour}>
      <p className={styles.hour__time}>{getShortTime(hour.time, false)}</p>
      <div className={styles.hour__image}>
        <img src={hour.condition.icon} alt="weather" />
      </div>
      <p className={styles.hour__temp}>
        {hour.temp_c}
        {' '}
        °C
      </p>
    </li>
  );
}

export default HourItem;
