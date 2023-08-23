class Weather {
  private readonly apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  private readonly baseURL = 'http://api.weatherapi.com/v1';

  public async getWeather(city: string) {
    const response = await fetch(
      `${this.baseURL}/forecast.json?q=${city}&days=7&key=${this.apiKey}`,
    );
    const data = await response.json();

    return data;
  }
}

const weather = new Weather();

export default weather;
