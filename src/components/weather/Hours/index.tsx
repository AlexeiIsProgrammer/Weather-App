import React from 'react';

import { Hour } from '../../../interfaces/weather';
import HourItem from '../HourItem';

import { HoursList, HoursWrapper } from './styles';

type HoursProps = {
  hours: Hour[];
};

function Hours({ hours }: HoursProps) {
  return (
    <HoursWrapper>
      <div>
        <HoursList>
          {hours.map((hour) => (
            <HourItem key={hour.toString()} hour={hour} />
          ))}
        </HoursList>
      </div>
    </HoursWrapper>
  );
}

export default Hours;
