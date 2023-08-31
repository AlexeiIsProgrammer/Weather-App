import axios from 'axios';

import { WeatherImages } from '../interfaces/weather-image';
import { randomImageNumber } from '../utils';

async function getBackgrounds(weather: string): Promise<WeatherImages> {
  const response = await axios.get<WeatherImages>(
    `https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_PHOTO_ACCESS_KEY}&page=1&query=${weather}`
  );
  return response.data;
}

export default async function getRandomBackground(
  weather: string
): Promise<string> {
  const images: WeatherImages = await getBackgrounds(weather);
  const maxImagesCount = 10;
  return images.results[randomImageNumber(maxImagesCount)].urls.full;
}
