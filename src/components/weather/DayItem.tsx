import React from 'react';
import { getWeekDay } from '../../utils';
import styles from './Weather.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Forecastday } from '../../models/weather';
import { weatherSlice } from '../../store/reducers/weatherSlice';

type DayProps = {
  id: number;
  weather: Forecastday;
};

function DayItem({ id, weather }: DayProps) {
  const dispatch = useAppDispatch();

  const { clickedDay } = useAppSelector((state) => state.weatherReducer);

  function hourStatistic() {
    dispatch(
      clickedDay === id
        ? weatherSlice.actions.weatherChooseDay(null)
        : weatherSlice.actions.weatherChooseDay(id),
    );
  }

  return (
    <div
      className={`${styles.day} ${clickedDay === id ? styles.day_active : ''}`}
      onClick={hourStatistic}
    >
      <p className={styles.day__date}>{getWeekDay(weather.date)}</p>
      <div className={styles.day__image}>
        <img src={weather.day.condition.icon} alt="weather" />
      </div>
      <span className={styles.day__temp}>
        {weather.day.avgtemp_c}
        °C
      </span>
    </div>
  );
}

export default DayItem;
