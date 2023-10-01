import { Weather } from '@Interfaces';

import { ClickedDayType } from './types';

export interface WeatherResponse {
  weather: Weather;
  weatherImage: {
    current: string;
    days: string[];
  };
}

export interface WeatherState {
  weather: Weather;
  weatherImage: {
    current: string;
    days: string[];
  };
  clickedDay: ClickedDayType;
  isLoading: boolean;
  error: string;
}
