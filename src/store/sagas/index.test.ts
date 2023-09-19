import getRandomBackground from '@API/background';
import { call, put } from 'redux-saga/effects';
import {
  weatherFetchingError,
  weatherFetchingSuccess,
} from '@store/slices/weatherSlice';
import { WeatherResponse } from '@store/types/interfaces';
import { Weather } from '@interfaces';

import { getWeatherByPositionSaga, getWeatherSaga } from '.';

describe('getWeatherSaga', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should process fullfiled state', async () => {
    const city = 'Minsk';

    const action = {
      payload: city,
      type: '',
    };

    const g = getWeatherSaga(action);

    g.next();

    const currentWeather = 'sunny';

    expect(g.next().value).toEqual(call(getRandomBackground, currentWeather));

    const data: Weather = {
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
    };

    const imageURL = 'https://';

    const weatherResponse: WeatherResponse = {
      weather: data,
      weatherImage: imageURL,
    };

    expect(g.next().value).toEqual(
      put(weatherFetchingSuccess(weatherResponse)),
    );

    expect(g.next().done).toEqual(true);
  });

  it('should process rejected state', async () => {
    const city = 'Minsk';

    const action = {
      payload: city,
      type: '',
    };

    const g = getWeatherSaga(action);

    g.next();

    expect(g.next().value).toEqual(
      put(weatherFetchingError('City name is incorrect')),
    );

    expect(g.next().done).toEqual(true);
  });
});
describe('getWeatherByPositionSaga', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should process fullfiled state', async () => {
    const city = 'Minsk';

    const action = {
      payload: city,
      type: '',
    };

    const g = getWeatherByPositionSaga(action);

    g.next();

    const currentWeather = 'sunny';

    expect(g.next().value).toEqual(call(getRandomBackground, currentWeather));

    const data: Weather = {
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
    };

    const imageURL = 'https://';

    const weatherResponse: WeatherResponse = {
      weather: data,
      weatherImage: imageURL,
    };

    expect(g.next().value).toEqual(
      put(weatherFetchingSuccess(weatherResponse)),
    );

    expect(g.next().done).toEqual(true);
  });

  it('should process rejected state', async () => {
    const city = 'Minsk';

    const action = {
      payload: city,
      type: '',
    };

    const g = getWeatherByPositionSaga(action);

    g.next();

    expect(g.next().value).toEqual(
      put(weatherFetchingError('Your current position is weird')),
    );

    expect(g.next().done).toEqual(true);
  });
});
