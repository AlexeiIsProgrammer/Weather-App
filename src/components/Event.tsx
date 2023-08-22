import React from 'react';
import { Item } from '../types/calendar';
import { getShortTime } from '../utils';

type EventProps = {
  event: Item;
};

function Event({ event }: EventProps) {
  return (
    <div>
      <span>{getShortTime(new Date(event.start.dateTime))}</span>
      <p>{event.summary}</p>
    </div>
  );
}

export default Event;
