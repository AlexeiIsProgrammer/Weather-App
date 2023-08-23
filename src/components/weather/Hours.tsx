import React from 'react';
import { Hour } from '../../types/weather';
import HourItem from './HourItem';

type HoursProps = {
  hours: Hour[];
};

function Hours({ hours }: HoursProps) {
  return (
    <div className="hours">
      <div className="hours__container">
        <ul className="hours__list">
          {hours.map((hour) => (
            <HourItem key={Math.random()} hour={hour} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Hours;
