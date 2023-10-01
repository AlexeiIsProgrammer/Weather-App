import '@testing-library/jest-dom';
import { WeatherState } from '@Store/types/interfaces';
import { fireEvent, screen } from '@testing-library/react';

import { renderWithProviders } from '../../test/index';

import 'jest-styled-components';

import { ElasticSelectProps } from './types/types';

import ElasticSelect from '.';

describe('testing of Elastic Option component', () => {
  test('should render founded options', async () => {
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

    const elasticSelectProps: ElasticSelectProps = {
      setIsSelectVisible: () => {},
      setInputCity: () => {},
      isLoadingCities: false,
      cities: [
        {
          id: 1,
          name: 'Minsk',
          region: 'Minsk',
          country: 'Belarus',
        },
      ],
    };

    renderWithProviders(<ElasticSelect {...elasticSelectProps} />, {
      preloadedState: {
        weatherReducer,
      },
    });
  });
  test('should render loading message', async () => {
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

    const elasticSelectProps: ElasticSelectProps = {
      setIsSelectVisible: () => {},
      setInputCity: () => {},
      isLoadingCities: true,
      cities: [
        {
          id: 1,
          name: 'Minsk',
          region: 'Minsk',
          country: 'Belarus',
        },
      ],
    };

    renderWithProviders(<ElasticSelect {...elasticSelectProps} />, {
      preloadedState: {
        weatherReducer,
      },
    });

    expect(await screen.findByText('Loading...')).toBeInTheDocument();
  });
  test('should render empty message', async () => {
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

    const elasticSelectProps: ElasticSelectProps = {
      setIsSelectVisible: () => {},
      setInputCity: () => {},
      isLoadingCities: false,
      cities: [],
    };

    renderWithProviders(<ElasticSelect {...elasticSelectProps} />, {
      preloadedState: {
        weatherReducer,
      },
    });

    expect(await screen.findByText('Empty')).toBeInTheDocument();
  });

  test('should click close button', async () => {
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

    const elasticSelectProps: ElasticSelectProps = {
      setIsSelectVisible: () => {},
      setInputCity: () => {},
      isLoadingCities: false,
      cities: [],
    };

    renderWithProviders(<ElasticSelect {...elasticSelectProps} />, {
      preloadedState: {
        weatherReducer,
      },
    });

    const button: HTMLInputElement = await screen.findByTitle('Close');
    fireEvent.click(button);
  });
});
