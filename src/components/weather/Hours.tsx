import React from 'react';
import HourItem from './HourItem';
import styles from './Weather.module.scss';
import { Hour } from '../../models/weather';

type HoursProps = {
  hours: Hour[];
};

function Hours({ hours }: HoursProps) {
  return (
    <div className={styles.hours}>
      <div className={styles.hours__container}>
        <ul className={styles.hours__list}>
          {hours.map((hour) => (
            <HourItem key={Math.random()} hour={hour} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Hours;
