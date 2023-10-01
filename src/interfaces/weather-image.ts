export interface WeatherImages {
  results: WeatherImage[];
}

interface WeatherImage {
  urls: Urls;
}

interface Urls {
  full: string;
}
