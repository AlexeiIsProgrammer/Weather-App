import React from 'react';
import { getShortTime } from '@utils/get-short-time';

import {
  EventBlock, EventSummary, EventTime, EventWrapper,
} from './styles';
import { EventProps } from './types/types';

function Event({ event }: EventProps) {
  console.log('event');

  return (
    <EventBlock>
      <a href={event.htmlLink}>
        <EventWrapper>
          <EventTime>
            {`${getShortTime(
              event.start.dateTime.toString(),
              false,
            )}-${getShortTime(event.end.dateTime.toString(), false)}`}
          </EventTime>
          <EventSummary>{event.summary}</EventSummary>
        </EventWrapper>
      </a>
    </EventBlock>
  );
}

export default Event;
