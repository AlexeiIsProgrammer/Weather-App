import { Weather } from '@Interfaces';
import { Action } from '@reduxjs/toolkit';

import weatherSlice, {
  weatherFetching,
  weatherFetchingError,
  weatherFetchingSuccess,
  weatherPositionFetching,
} from '.';

describe('test weatherSlice fetching', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetching', () => {
    const weatherFetchingState = {
      weather: {} as Weather,
      weatherImage: {
        current: '',
        days: [],
      },
      clickedDay: null,
      isLoading: true,
      error: '',
    };
    const weatherState = {
      weather: {} as Weather,
      weatherImage: {
        current: '',
        days: [],
      },
      isLoading: false,
      clickedDay: null,
      error: '',
    };
    const weatherFetchingAction: Action = { type: weatherFetching.type };
    const weatherFetchingResult = weatherSlice(
      weatherState,
      weatherFetchingAction,
    );
    expect(weatherFetchingResult).toStrictEqual(weatherFetchingState);

    const weatherPositionFetchingAction: Action = {
      type: weatherPositionFetching.type,
    };
    const weatherPositionFetchingResult = weatherSlice(
      weatherState,
      weatherPositionFetchingAction,
    );
    expect(weatherPositionFetchingResult).toStrictEqual(weatherFetchingState);
  });

  it('should fetching success', () => {
    const weatherFetchingState = {
      weather: {
        location: {
          name: 'Minsk',
        },
      } as Weather,
      weatherImage: {
        current: 'https://...',
        days: [],
      },
      clickedDay: null,
      isLoading: false,
      error: '',
    };

    const weatherState = {
      weather: {} as Weather,
      weatherImage: {
        current: '',
        days: [],
      },
      isLoading: false,
      clickedDay: null,
      error: '',
    };

    const action = {
      type: weatherFetchingSuccess.type,
      payload: {
        weather: {
          location: {
            name: 'Minsk',
          },
        },
        weatherImage: {
          current: 'https://...',
          days: [],
        },
      },
    };
    const result = weatherSlice(weatherState, action);
    expect(result).toStrictEqual(weatherFetchingState);
  });

  it('should fetching error', () => {
    const weatherState = {
      weather: {} as Weather,
      weatherImage: {
        current: '',
        days: [],
      },
      isLoading: false,
      clickedDay: null,
      error: '',
    };

    const action = { type: weatherFetchingError.type, payload: 'Error' };
    const result = weatherSlice(weatherState, action);
    expect(result.error).toBeTruthy();
    expect(result.isLoading).toBeFalsy();
  });
});
