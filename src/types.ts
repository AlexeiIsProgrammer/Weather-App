import { Weather } from './models/weather';

export type WeatherResponse = {
  weather: Weather;
  weatherImage: string;
};
