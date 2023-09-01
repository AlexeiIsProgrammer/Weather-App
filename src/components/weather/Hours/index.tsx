import React from 'react';

import HourItem from '../HourItem';
import { useAppSelector } from '../../../hooks/redux';
import weatherSelector from '../../../store/selectors';
import { Hour } from '../../../interfaces';

import { HoursList, HoursWrapper } from './styles';

function Hours() {
  const { weather, clickedDay } = useAppSelector(weatherSelector);

  if (clickedDay === null) return null;

  const hours: Hour[] = weather.forecast.forecastday[clickedDay].hour;

  console.log('hours');
  return (
    <HoursWrapper>
      <div>
        <HoursList>
          {hours.map((hour) => (
            <HourItem key={hour.time.toString()} hour={hour} />
          ))}
        </HoursList>
      </div>
    </HoursWrapper>
  );
}

export default Hours;
