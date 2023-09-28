import '@testing-library/jest-dom';
import { WeatherState } from '@Store/types/interfaces';

import { renderWithProviders } from '../../test/index';

import Time from '.';

const weatherReducer: WeatherState = {
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

describe('test Time component', () => {
  test('render Time component', async () => {
    renderWithProviders(<Time />, { preloadedState: { weatherReducer } });
  });
});
