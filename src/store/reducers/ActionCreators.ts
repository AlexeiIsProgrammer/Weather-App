import axios from 'axios';
import { WeatherResponse } from '../../types';
import { Weather } from '../../models/weather';
import { AppDispatch } from '..';
import { weatherSlice } from './weatherSlice';
import getRandomBackground from '../../API/background';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
const baseURL = 'http://api.weatherapi.com/v1';

export const fetchWeather = (city: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(weatherSlice.actions.weatherFetching());
    const response = await axios.get<Weather>(
      `${baseURL}/forecast.json?q=${city}&days=7&key=${apiKey}`
    );

    const currentWeather = response.data.current.condition.text;
    const responseImage = await getRandomBackground(currentWeather);

    const weatherResponse: WeatherResponse = {
      weather: response.data,
      weatherImage: responseImage,
    };

    dispatch(weatherSlice.actions.weatherFetchingSuccess(weatherResponse));
  } catch (e) {
    if (e instanceof Error) {
      dispatch(weatherSlice.actions.weatherFetchingError(e.message));
    }
  }
};
