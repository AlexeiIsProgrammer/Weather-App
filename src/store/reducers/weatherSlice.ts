import { Weather } from '@interfaces';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { WeatherState, WeatherResponse } from '@store/types/interfaces';
import { ClickedDayType } from '@store/types/types';

import { WEATHER } from '../../constants';

const weatherObj = {} as Weather;

const initialState: WeatherState = {
  weather: weatherObj,
  weatherImage: '',
  isLoading: false,
  clickedDay: null,
  error: '',
};

export const weatherSlice = createSlice({
  name: WEATHER,
  initialState,
  reducers: {
    weatherPositionFetching(state, { payload: city }: PayloadAction<string>) {
      state.isLoading = true;
      state.error = '';
    },
    weatherFetching(state, { payload: city }: PayloadAction<string>) {
      state.isLoading = true;
      state.error = '';
    },
    weatherFetchingSuccess(state, action: PayloadAction<WeatherResponse>) {
      state.isLoading = false;
      state.error = '';
      state.weather = action.payload.weather;
      state.weatherImage = action.payload.weatherImage;
    },
    weatherFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    weatherChooseDay(state, action: PayloadAction<ClickedDayType>) {
      state.clickedDay = action.payload;
    },
  },
});

export const {
  weatherChooseDay,
  weatherFetching,
  weatherPositionFetching,
  weatherFetchingSuccess,
  weatherFetchingError,
} = weatherSlice.actions;

export default weatherSlice.reducer;
