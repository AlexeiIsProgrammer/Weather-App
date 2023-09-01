import React from 'react';

import { getWeekDay } from '../../../utils';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { weatherSlice } from '../../../store/reducers/weatherSlice';

import { DayDate, DayImage, DayTemp, DayWrapper } from './styles';
import { DayProps } from './types/types';
import weatherSelector from '../../../store/selectors';

function DayItem({ id, weather }: DayProps) {
  const dispatch = useAppDispatch();
  console.log('day');

  const { clickedDay } = useAppSelector(weatherSelector);

  function hourStatistic() {
    dispatch(
      clickedDay === id
        ? weatherSlice.actions.weatherChooseDay(null)
        : weatherSlice.actions.weatherChooseDay(id)
    );
  }

  return (
    <DayWrapper $active={clickedDay === id} onClick={hourStatistic}>
      <DayDate>{getWeekDay(weather.date)}</DayDate>
      <DayImage>
        <img src={weather.day.condition.icon} alt="weather" />
      </DayImage>
      <DayTemp>
        {weather.day.avgtemp_c}
        °C
      </DayTemp>
    </DayWrapper>
  );
}

export default DayItem;
