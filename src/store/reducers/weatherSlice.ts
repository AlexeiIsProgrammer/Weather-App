import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Weather } from '../../interfaces/weather';
import { WeatherResponse, WeatherState } from '../types/interfaces';
import { ClickedDayType } from '../types/types';

const weatherObj = {} as Weather;

const initialState: WeatherState = {
  weather: weatherObj,
  weatherImage: '',
  isLoading: false,
  clickedDay: null,
  error: '',
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    weatherFetching(state) {
      state.isLoading = true;
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

export default weatherSlice.reducer;
