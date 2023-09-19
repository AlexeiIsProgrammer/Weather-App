import React from 'react';

import {
  EventBlock, EventSummary, EventTime, EventWrapper,
} from './styles';
import { EventProps } from './types/types';

import { getShortTime } from '~Utils/get-short-time';

function Event({ event }: EventProps) {
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
