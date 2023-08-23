import React, { useState } from 'react';
import { Forecastday } from '../../types/weather';
import { getWeekDay } from '../../utils';
import Hours from './Hours';
import styles from './Weather.module.scss';

type DayProps = {
  weather: Forecastday;
};

function DayItem({ weather }: DayProps) {
  const [isHourStat, setIsHourStat] = useState<boolean>(false);

  function hourStatistic() {
    setIsHourStat(!isHourStat);
  }

  return (
    <div className={styles.day} onClick={hourStatistic}>
      <p className={styles.day__date}>{getWeekDay(weather.date)}</p>
      <div className={styles.day__image}>
        <img src={weather.day.condition.icon} alt="weather" />
      </div>
      <span className={styles.day__temp}>
        {weather.day.avgtemp_c}
        °C
      </span>

      {isHourStat ? <Hours hours={weather.hour} /> : null}
    </div>
  );
}

export default DayItem;
