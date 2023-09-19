import '@testing-library/jest-dom';
import { WeatherState } from '@store/types/interfaces';

import { renderWithProviders } from '../../test/index';

import 'jest-styled-components';

import Background from '.';

test('renders background wrapper', async () => {
  const weatherReducer: WeatherState = {
    error: '',
    isLoading: false,
    clickedDay: null,
    weatherImage: '',
    weather: {
      location: {
        name: '',
      },
      current: {
        temp_c: 36.8,
        condition: {
          icon: './sun.jpg',
          text: 'sunny',
        },
      },
      forecast: {
        forecastday: [
          {
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
          },
        ],
      },
    },
  };

  renderWithProviders(<Background />, {
    preloadedState: { weatherReducer },
  });
});
