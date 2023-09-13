import { WeatherImages } from '@interfaces';
import { randomImageNumber } from '@utils/get-random';
import axios from 'axios';

async function getBackgrounds(weather: string): Promise<WeatherImages> {
  const response = await axios.get<WeatherImages>(
    `https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_PHOTO_ACCESS_KEY}&page=1&query=${weather}`,
  );
  return response.data;
}

export default async function getRandomBackground(
  weather: string,
): Promise<string> {
  const images: WeatherImages = await getBackgrounds(weather);
  const MAX_IMAGES_LIMIT = 10;
  return images.results[randomImageNumber(MAX_IMAGES_LIMIT)].urls.full;
}
