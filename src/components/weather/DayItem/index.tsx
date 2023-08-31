import React from 'react';

import { getWeekDay } from '../../../utils';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { weatherSlice } from '../../../store/reducers/weatherSlice';

import {
  DayDate, DayImage, DayTemp, DayWrapper,
} from './styles';
import { DayProps } from './types/types';

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
