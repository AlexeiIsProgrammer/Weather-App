import { WeatherState } from '@store/types/interfaces';

import { RootState } from '..';

import userSelector from './index';

describe('weatherSelector', () => {
  it('should return user state from store', () => {
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
    const store: RootState = {
      weatherReducer,
    };

    const result = userSelector(store);
    expect(result).toBe(weatherReducer);
  });
});
