import { Item } from '../../../interfaces/calendar';
import Event from '../Event';
import styles from '../Calendar.module.scss';

type EventsProps = {
  events: Item[];
};

function EventsList({ events }: EventsProps) {
  return (
    <div className={styles.events}>
      <div className={styles.events__container}>
        <ul className={styles.events__list}>
          {events.map((event) => (
            <Event key={Math.random()} event={event} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EventsList;
