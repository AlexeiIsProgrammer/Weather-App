import React from 'react';

import { getShortTime } from '../../../utils';

import {
  EventBlock, EventSummary, EventTime, EventWrapper,
} from './styles';
import { EventProps } from './types/types';

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
