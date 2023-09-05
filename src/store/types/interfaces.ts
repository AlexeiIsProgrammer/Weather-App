import { Weather } from '@interfaces';

import { ClickedDayType } from './types';

export interface WeatherResponse {
  weather: Weather;
  weatherImage: string;
}

export interface WeatherState {
  weather: Weather;
  weatherImage: string;
  clickedDay: ClickedDayType;
  isLoading: boolean;
  error: string;
}
