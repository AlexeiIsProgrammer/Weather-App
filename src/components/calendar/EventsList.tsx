import React from 'react';
import { Item } from '../../types/calendar';
import Event from './Event';

type EventsProps = {
  events: Item[];
};

function EventsList({ events }: EventsProps) {
  return (
    <div>
      <ul>
        {events.map((event) => (
          <Event key={Math.random()} event={event} />
        ))}
      </ul>
    </div>
  );
}

export default EventsList;
