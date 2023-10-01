import { Weather } from '@Interfaces';

export const isWeatherExists = (weather: Weather) => Object.keys(weather).length !== 0;
