import React from 'react';

import HourItem from '../HourItem';

import { HoursList, HoursWrapper } from './styles';
import { HoursProps } from './types/types';

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
