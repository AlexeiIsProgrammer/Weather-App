import React from 'react';
import { useAppSelector } from '@hooks/redux';
import { Hour } from '@interfaces';
import weatherSelector from '@store/selectors';
import HourItem from '@components/HourItem';

import { HoursWrapper, HoursList } from './styles';

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
