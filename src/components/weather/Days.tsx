import React from 'react';
import { Weather } from '../../types/weather';
import DayItem from './DayItem';
import CurrentDayItem from './CurrentDayItem';
import styles from './Weather.module.scss';

type DaysProps = {
  weatherDays: Weather;
};

function Days({ weatherDays }: DaysProps) {
  return (
    <div className={styles.days}>
      <CurrentDayItem currentDay={weatherDays.current} />
      <div className={styles.days__list}>
        {weatherDays.forecast.forecastday.map((day) => (
          <DayItem key={Math.random()} weather={day} />
        ))}
      </div>
    </div>
  );
}

export default Days;
