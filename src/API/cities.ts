import baseURL from '@Constants';
import { CityName } from '@Interfaces';
import axios, { AxiosResponse } from 'axios';

export default async function getCities(city: string) {
  const response: AxiosResponse<CityName[]> = await axios.get<CityName[]>(
    `${baseURL}/search.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}`
  );

  return response.data;
}
