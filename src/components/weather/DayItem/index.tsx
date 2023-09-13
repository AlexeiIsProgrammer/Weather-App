import React from 'react';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { weatherChooseDay } from '@store/reducers/weatherSlice';
import weatherSelector from '@store/selectors';
import { getWeekDay } from '@utils/get-week-day';

import {
  DayWrapper, DayDate, DayImage, DayTemp,
} from './styles';
import { DayProps } from './types/types';

function DayItem({ id, weather }: DayProps) {
  const dispatch = useAppDispatch();
  console.log('day');

  const { clickedDay } = useAppSelector(weatherSelector);

  function hourStatistic() {
    dispatch(clickedDay === id ? weatherChooseDay(null) : weatherChooseDay(id));
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
