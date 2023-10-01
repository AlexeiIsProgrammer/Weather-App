const baseURL = 'http://api.weatherapi.com/v1';

export default baseURL;

export const WEATHER = 'weather';
export type WeatherType = typeof WEATHER;

export const GET_WEATHER_POSITION = `${WEATHER}/weatherPositionFetching`;
export type GetWeatherPositionType = typeof GET_WEATHER_POSITION;

export const GET_WEATHER = `${WEATHER}/weatherFetching`;
export type GetWeatherType = typeof GET_WEATHER;
