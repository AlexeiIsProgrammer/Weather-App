import { WeatherImages } from '../types/weather-image';

async function getBackgrounds(weather: string): Promise<WeatherImages> {
  const response = await fetch(
    `https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_PHOTO_ACCESS_KEY}&page=1&query=${weather}`,
  );
  const data = await response.json();

  return data;
}

export default async function getRandomBackground(
  weather: string,
): Promise<string> {
  const images: WeatherImages = await getBackgrounds(weather);

  const randomImageNumber = Math.floor(Math.random() * 10);

  return images.results[randomImageNumber].urls.full;
}
