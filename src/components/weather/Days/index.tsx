import React from 'react';

import { Current, Forecastday } from '../../../interfaces/weather';

import DayItem from '../DayItem/DayItem';
// import CurrentDayItem from './CurrentDayItem';
import styles from '../Weather.module.scss';
import CurrentDayItem from '../CurrentDayItem/CurrentDayItem';

type DaysProps = {
  weatherDays: Forecastday[];
  currentDay: Current;
};

function Days({ currentDay, weatherDays }: DaysProps) {
  return (
    <div className={styles.days}>
      <CurrentDayItem currentDay={currentDay} />
      <div className={styles.days__list}>
        {weatherDays.map((day, ind) => (
          <DayItem key={Math.random()} id={ind} weather={day} />
        ))}
      </div>
    </div>
  );
}

export default Days;
