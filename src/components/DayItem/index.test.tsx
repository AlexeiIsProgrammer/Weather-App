import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { fireEvent, screen } from '@testing-library/react';
import Theme from '@Theme';

import { renderWithProviders } from '../../test/index';

import { DayTemp } from './styles';

import 'jest-styled-components';

import DayItem from '.';

test('renders dayitem wrapper and activate the day', async () => {
  const DayItemProps = {
    date: new Date('05-10-2023'),
    day: {
      avgtemp_c: 34.7,
      condition: {
        icon: './rain.jpeg',
        text: 'rainy',
      },
    },
    hour: [
      {
        time: '23:13:10',
        temp_c: 12.5,
        condition: {
          icon: './coldy.png',
          text: 'very cold',
        },
      },
    ],
  };

  renderWithProviders(<DayItem id={1} weather={DayItemProps} />, {
    preloadedState: {
      weatherReducer: {
        error: '',
        isLoading: false,
        clickedDay: null,
        weatherImage: '',
        weather: {
          location: {
            name: 'Minsk',
          },
          current: {
            temp_c: 36.8,
            condition: {
              icon: './sun.jpg',
              text: 'sunny',
            },
          },
          forecast: {
            forecastday: [],
          },
        },
      },
    },
  });

  const wrapper = renderer
    .create(
      <Theme>
        <DayTemp />
      </Theme>
    )
    .toJSON();
  expect(wrapper).toHaveStyleRule('font-weight', '600');

  const day = await screen.findByTitle('Day');
  expect(day).toBeInTheDocument();

  fireEvent.click(day);
});

test('renders dayitem wrapper and deactivate the day', async () => {
  const DayItemProps = {
    date: new Date('05-10-2023'),
    day: {
      avgtemp_c: 34.7,
      condition: {
        icon: './rain.jpeg',
        text: 'rainy',
      },
    },
    hour: [
      {
        time: '23:13:10',
        temp_c: 12.5,
        condition: {
          icon: './coldy.png',
          text: 'very cold',
        },
      },
    ],
  };

  renderWithProviders(<DayItem id={1} weather={DayItemProps} />, {
    preloadedState: {
      weatherReducer: {
        error: '',
        isLoading: false,
        clickedDay: 1,
        weatherImage: '',
        weather: {
          location: {
            name: 'Minsk',
          },
          current: {
            temp_c: 36.8,
            condition: {
              icon: './sun.jpg',
              text: 'sunny',
            },
          },
          forecast: {
            forecastday: [],
          },
        },
      },
    },
  });

  const wrapper = renderer
    .create(
      <Theme>
        <DayTemp />
      </Theme>
    )
    .toJSON();
  expect(wrapper).toHaveStyleRule('font-weight', '600');

  const day = await screen.findByTitle('Day');
  expect(day).toBeInTheDocument();

  fireEvent.click(day);
});
