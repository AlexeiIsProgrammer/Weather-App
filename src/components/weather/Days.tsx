import React from 'react';
import DayItem from './DayItem';
// import CurrentDayItem from './CurrentDayItem';
import styles from './Weather.module.scss';
import { Current, Forecastday } from '../../models/weather';
import CurrentDayItem from './CurrentDayItem';

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
