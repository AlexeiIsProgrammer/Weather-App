import '@testing-library/jest-dom';
import { WeatherState } from '@store/types/interfaces';
import { fireEvent, screen } from '@testing-library/react';

import { renderWithProviders } from '../../test/index';

import 'jest-styled-components';
import ElasticInput from '.';

describe('testing of Elastic Input component', () => {
  const elasticInputProps = {
    inputCity: 'Minsk',
    setInputCity: () => {},
    timer: 0,
    setTimer: () => {},
  };

  test('render Elastic Input', async () => {
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

    renderWithProviders(<ElasticInput {...elasticInputProps} />, {
      preloadedState: {
        weatherReducer,
      },
    });

    expect(
      await screen.findByPlaceholderText('Write country here'),
    ).toBeInTheDocument();
  });

  test('input text in Elastic Input', async () => {
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

    renderWithProviders(<ElasticInput {...elasticInputProps} />, {
      preloadedState: {
        weatherReducer,
      },
    });

    const input: HTMLInputElement = await screen.findByPlaceholderText('Write country here');

    fireEvent.change(input, { target: { value: 'Riga' } });
  });
});
