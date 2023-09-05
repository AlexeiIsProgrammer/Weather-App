import { Weather } from '@interfaces';

export const isWeatherExists = (weather: Weather) =>
  Object.keys(weather).length !== 0;
