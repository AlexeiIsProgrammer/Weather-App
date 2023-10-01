import '@testing-library/jest-dom';
import { WeatherState } from '@Store/types/interfaces';
import { fireEvent, screen } from '@testing-library/react';

import { renderWithProviders } from '../../test/index';

import 'jest-styled-components';

import { ElasticOptionsProps } from './types/types';

import ElasticOption from '.';

describe('testing of Elastic Option component', () => {
  test('render Elastic Option', async () => {
    const weatherReducer: WeatherState = {
      error: '',
      isLoading: false,
      clickedDay: null,
      weatherImage: {
        current: '',
        days: [],
      },
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

    const elasticOptionsProps: ElasticOptionsProps = {
      setInputCity: () => {},
      name: 'London',
      country: '',
    };

    renderWithProviders(<ElasticOption {...elasticOptionsProps} />, {
      preloadedState: {
        weatherReducer,
      },
    });

    expect(await screen.findByText('London')).toBeInTheDocument();
  });

  test('click on the Elastic Option', async () => {
    const weatherReducer: WeatherState = {
      error: '',
      isLoading: false,
      clickedDay: null,
      weatherImage: {
        current: '',
        days: [],
      },
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

    const elasticOptionsProps: ElasticOptionsProps = {
      setInputCity: () => {},
      name: 'London',
      country: '',
    };

    renderWithProviders(<ElasticOption {...elasticOptionsProps} />, {
      preloadedState: {
        weatherReducer,
      },
    });

    const button: HTMLInputElement = await screen.findByText('London');

    fireEvent.click(button);
  });
});
