import React from 'react';

import {
  DayWrapper, DayDate, DayImage, DayTemp,
} from './styles';
import { DayProps } from './types/types';

import { useAppDispatch, useAppSelector } from '~Hooks/redux';
import { weatherChooseDay } from '~Store/slices/weatherSlice';
import weatherSelector from '~Store/selectors';
import { getWeekDay } from '~Utils/get-week-day';

function DayItem({ id, weather }: DayProps) {
  const dispatch = useAppDispatch();
  const { clickedDay } = useAppSelector(weatherSelector);

  function hourStatistic() {
    dispatch(clickedDay === id ? weatherChooseDay(null) : weatherChooseDay(id));
  }

  return (
    <DayWrapper title="Day" $active={clickedDay === id} onClick={hourStatistic}>
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
