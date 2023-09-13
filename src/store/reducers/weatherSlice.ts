import { Weather } from '@interfaces';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { WeatherState, WeatherResponse } from '@store/types/interfaces';
import { ClickedDayType } from '@store/types/types';

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

export const { weatherChooseDay } = weatherSlice.actions;

export default weatherSlice.reducer;
