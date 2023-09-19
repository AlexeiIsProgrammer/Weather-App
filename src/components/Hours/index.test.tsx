import '@testing-library/jest-dom';
import { WeatherState } from '@store/types/interfaces';

import { renderWithProviders } from '../../test/index';

import Hours from '.';

describe('test Hours component', () => {
  test('render Hours list', async () => {
    const weatherReducer: WeatherState = {
      error: '',
      isLoading: false,
      clickedDay: 0,
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
    renderWithProviders(<Hours />, { preloadedState: { weatherReducer } });
  });
  test('return null if clickedDay === null', async () => {
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
    renderWithProviders(<Hours />, { preloadedState: { weatherReducer } });
  });
});
