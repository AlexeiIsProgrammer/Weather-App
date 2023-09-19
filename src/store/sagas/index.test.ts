import { Weather } from '@interfaces';
import { Action } from '@reduxjs/toolkit';

describe('test getWeatherSaga generator', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should process fullfilled saga', () => {
    const weatherFetchingState = {
      weather: {} as Weather,
      weatherImage: '',
      clickedDay: null,
      isLoading: true,
      error: '',
    };
    const weatherState = {
      weather: {} as Weather,
      weatherImage: '',
      isLoading: false,
      clickedDay: null,
      error: '',
    };
    const weatherFetchingAction: Action = { type: weatherFetching.type };
    const weatherFetchingResult = weatherSlice(
      weatherState,
      weatherFetchingAction
    );
    expect(weatherFetchingResult).toStrictEqual(weatherFetchingState);

    const weatherPositionFetchingAction: Action = {
      type: weatherPositionFetching.type,
    };
    const weatherPositionFetchingResult = weatherSlice(
      weatherState,
      weatherPositionFetchingAction
    );
    expect(weatherPositionFetchingResult).toStrictEqual(weatherFetchingState);
  });
});
