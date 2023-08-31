import React from 'react';

import { EventItem } from '../../../interfaces';
import Event from '../Event';

import { Events, EventsListBlock } from './styles';

type EventsProps = {
  events: EventItem[];
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
