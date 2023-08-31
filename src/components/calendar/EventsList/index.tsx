import React from 'react';

import Event from '../Event';
import { Item } from '../../../interfaces/calendar';

import { Events, EventsListBlock } from './styles';

type EventsProps = {
  events: Item[];
};

function EventsList({ events }: EventsProps) {
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
