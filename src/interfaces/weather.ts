export interface Weather {
  location: Location;
  current: CurrentDayWeather;
  forecast: Forecast;
}

export interface CurrentDayWeather {
  temp_c: number;
  condition: Condition;
}

export interface Condition {
  icon: string;
  text: string;
}

export interface Forecast {
  forecastday: Forecastday[];
}

export interface Forecastday {
  date: Date;
  day: Day;
  hour: Hour[];
}

export interface Day {
  avgtemp_c: number;
  condition: Condition;
}

export interface Hour {
  time: string;
  temp_c: number;
  condition: Condition;
}

export interface Location {
  name: string;
}

export interface CityName {
  id: number;
  name: string;
  region: string;
  country: string;
}
