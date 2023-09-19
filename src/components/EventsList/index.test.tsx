import '@testing-library/jest-dom';

import { renderWithProviders } from '../../test/index';

import EventsList from '.';

test('should render event', () => {
  const eventsListProps = {
    events: [
      {
        id: '1',
        htmlLink: '',
        summary: '',
        start: {
          timeZone: '',
          dateTime: new Date('12-12-2000'),
        },
        end: {
          timeZone: '',
          dateTime: new Date('12-12-2000'),
        },
      },
    ],
  };
  renderWithProviders(<EventsList {...eventsListProps} />);
});
