import React from 'react';
import Marquee from 'react-fast-marquee';
import { Item } from '../../types/calendar';
import Event from './Event';
import styles from './Calendar.module.scss';

type EventsProps = {
  events: Item[];
};

function EventsList({ events }: EventsProps) {
  return (
    <div className={styles.events}>
      <div className={styles.events__container}>
        <Marquee pauseOnHover direction="down" className={styles.events__list}>
          {events.map((event) => (
            <Event key={Math.random()} event={event} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default EventsList;
