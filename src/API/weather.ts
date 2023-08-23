export default class WeatherAPI {
  private static readonly apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  private static readonly baseURL = 'http://api.weatherapi.com/v1';

  static async getWeather(city: string) {
    try {
      const response = await fetch(
        `${this.baseURL}/forecast.json?q=${city}&days=7&key=${this.apiKey}`,
      );

      if (!response.ok) return null;

      const data = await response.json();

      return data;
    } catch (err) {
      return null;
    }
  }
}
