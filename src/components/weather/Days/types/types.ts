import { CurrentDayWeather, Forecastday } from '../../../../interfaces';

export type DaysProps = {
  weatherDays: Forecastday[];
  currentDay: CurrentDayWeather;
};
