import { Weather } from '@Interfaces';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  weatherFetchingError,
  weatherFetchingSuccess,
} from '@Store/slices/weatherSlice';
import { WeatherResponse } from '@Store/types/interfaces';
import axios, { AxiosResponse } from 'axios';
import {
  takeLatest, put, fork, call, all,
} from 'redux-saga/effects';
import getRandomBackground from '@API/background';
import baseURL, { GET_WEATHER, GET_WEATHER_POSITION } from '@Constants';

export function* getWeatherSaga({ payload: city }: PayloadAction<string>) {
  try {
    const response: AxiosResponse<Weather> = yield axios.get<Weather>(
      `${baseURL}/forecast.json?q=${city}&days=7&key=${process.env.REACT_APP_WEATHER_API_KEY}`,
    );

    const currentWeather = response.data.current.condition.text;

    const responseImage: string = yield call(
      getRandomBackground,
      currentWeather,
    );

    const weatherResponse: WeatherResponse = {
      weather: response.data,
      weatherImage: responseImage,
    };

    yield put(weatherFetchingSuccess(weatherResponse));
  } catch (e) {
    if (e instanceof Error) {
      yield put(weatherFetchingError('City name is incorrect'));
    }
  }
}

export function* getWeatherByPositionSaga({
  payload: positionCity,
}: PayloadAction<string>) {
  try {
    const response: AxiosResponse<Weather> = yield axios.get<Weather>(
      `${baseURL}/forecast.json?q=${positionCity}&days=7&key=${process.env.REACT_APP_WEATHER_API_KEY}`,
    );

    const currentWeather = response.data.current.condition.text;

    const responseImage: string = yield call(
      getRandomBackground,
      currentWeather,
    );

    const weatherResponse: WeatherResponse = {
      weather: response.data,
      weatherImage: responseImage,
    };

    yield put(weatherFetchingSuccess(weatherResponse));
  } catch (e) {
    if (e instanceof Error) {
      yield put(weatherFetchingError('Your current position is weird'));
    }
  }
}

export function* watchGetWeather() {
  yield takeLatest(GET_WEATHER, getWeatherSaga);
}

export function* watchGetWeatherByPosition() {
  yield takeLatest(GET_WEATHER_POSITION, getWeatherByPositionSaga);
}

export default function* rootSaga() {
  yield all([fork(watchGetWeatherByPosition), fork(watchGetWeather)]);
}
