class Weather {
  private readonly apiKey1 = 'a9895c5e3fed47565362c834e83e2158';

  private readonly otherWeatherAPIkey = '4c996111139447b0aeb154912232208';

  private readonly baseURL = 'http://api.weatherapi.com/v1';

  public async getFiveDayWeather(city: string) {
    const response = await fetch(
      `${this.baseURL}/forecast.json?q=${city}&days=7&key=${this.otherWeatherAPIkey}`,
    );
    const data = await response.json();

    return data;
  }

  // public async getHourDayWeather(city: string, day: string) {
  //   const response = await fetch(
  //     `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${this.apiKey1}&units=metric`
  //   );
  //   const data = await response.json();

  //   console.log(data);
  // }
}

const weather = new Weather();

export default weather;
