import '@testing-library/jest-dom';

import { renderWithProviders } from '../../test/index';

import HourItem from '.';

test('render Hours component', async () => {
  const hourProps = {
    hour: {
      time: '23:13:10',
      temp_c: 12.5,
      condition: {
        icon: './coldy.png',
        text: 'very cold',
      },
    },
  };
  renderWithProviders(<HourItem {...hourProps} />);
});
