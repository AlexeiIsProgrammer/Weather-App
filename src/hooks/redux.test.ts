import { useDispatch } from 'react-redux';

import { renderHookWithProviders } from '../test';
import { AppDispatch, RootState } from '../store';

import { useAppDispatch, useAppSelector } from './redux';

describe('useAppDispatch', () => {
  it('should return dispatch', () => {
    const {
      result: { current },
    } = renderHookWithProviders<AppDispatch>(() => useAppDispatch());
    const {
      result: { current: dispatch },
    } = renderHookWithProviders(() => useDispatch());
    expect(current.toString()).toBe(dispatch.toString());
  });
});

describe('useAppSelector', () => {
  it('should return weather state from store', () => {
    const weatherReducer: RootState = {
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
      },
      _persist: {
        rehydrated: false,
        version: 1,
      },
    };
    const {
      result: { current },
    } = renderHookWithProviders<RootState['weatherReducer']>(
      () => useAppSelector((state) => state.weatherReducer),
      {
        preloadedState: {
          weatherReducer: weatherReducer.weatherReducer,
        },
      },
    );
    expect(current).toStrictEqual(weatherReducer.weatherReducer);
  });
});
