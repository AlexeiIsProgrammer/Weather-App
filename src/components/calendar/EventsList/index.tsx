import React from 'react';
import Event from '@components/Calendar/Event';

import { Events, EventsListBlock } from './styles';
import { EventsProps } from './types/types';

function EventsList({ events }: EventsProps) {
  console.log('event list');

  return (
    <Events>
      <div>
        <EventsListBlock>
          {events.map((event) => (
            <Event key={event.id} event={event} />
          ))}
        </EventsListBlock>
      </div>
    </Events>
  );
}

export default EventsList;
