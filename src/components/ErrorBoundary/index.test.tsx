import '@testing-library/jest-dom';
import { WeatherState } from '@Store/types/interfaces';

import { renderWithProviders } from '../../test/index';

import 'jest-styled-components';

import ErrorBoundary from '.';

describe('ErrorBoundary', () => {
  test('should render ErrorBoundary wrapper', async () => {
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

    function Child({ isError }: { isError: boolean }): JSX.Element {
      if (isError) {
        throw new Error('Oops, something went wrong!');
      }

      return <div>Test Child!</div>;
    }

    renderWithProviders(<Child isError={false} />, {
      preloadedState: { weatherReducer },
    });
  });

  test('should render ErrorBoundary wrapper with Error message', async () => {
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

    function Child({ isError }: { isError: boolean }): JSX.Element {
      if (isError) {
        throw new Error('Oops, something went wrong!');
      }

      return <div>Test Child!</div>;
    }

    renderWithProviders(<Child isError />, {
      preloadedState: { weatherReducer },
    });
  });
});
