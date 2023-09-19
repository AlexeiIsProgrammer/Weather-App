import React from 'react';
import { useAppSelector } from '@Hooks/redux';
import { Hour } from '@Interfaces';
import weatherSelector from '@Store/selectors';
import HourItem from '@Components/HourItem';

import { HoursWrapper, HoursList } from './styles';

function Hours() {
  const { weather, clickedDay } = useAppSelector(weatherSelector);

  if (clickedDay === null) return null;

  const hours: Hour[] = weather.forecast.forecastday[clickedDay].hour;

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
