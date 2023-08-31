import { Item } from '../../../interfaces/calendar';
import { getShortTime } from '../../../utils';
import styles from '../Calendar.module.scss';

type EventProps = {
  event: Item;
};

function Event({ event }: EventProps) {
  return (
    <div className={styles.event}>
      <a href={event.htmlLink}>
        <div className={styles.event__container}>
          <span className={styles.event__time}>
            {getShortTime(event.start.dateTime.toString(), false)}
            -
            {getShortTime(event.end.dateTime.toString(), false)}
          </span>
          <p className={styles.event__summary}>{event.summary}</p>
        </div>
      </a>
    </div>
  );
}

export default Event;
