import React, { useEffect, useState } from 'react';
import apiCalendar from './API/calendar';
import Button from './components/UI/Button/Button';
import weather from './API/weather';
import Time from './components/time/Time';
import getPosition from './API/geolocation';
import { Forecastday, Weather } from './types/weather';
import { CalendarResponse, Item } from './types/calendar';
import getRandomBackground from './API/background';
import { WeatherImage } from './types/weather-image';
import Days from './components/weather/Days';
import EventsList from './components/calendar/EventsList';

function App() {
  // const calendarID = process.env.REACT_APP_CALENDAR_ID as string;
  // const apiKey = process.env.REACT_APP_GOOGLE_API_KEY as string;
  // const accessToken = process.env.REACT_APP_GOOGLE_ACCESS_TOKEN;

  const [weatherDays, setWeatherDays] = useState<Forecastday[]>([]);
  const [weatherImage, setWeatherImage] = useState<WeatherImage | null>(null);
  const [events, setEvents] = useState<Item[]>([]);

  useEffect(() => {
    getPosition().then((pos) => {
      weather.getFiveDayWeather(pos).then(async (data: Weather) => {
        const forecastDays = data.forecast.forecastday;
        const currentWeather = data.current.condition.text;

        setWeatherDays(forecastDays);

        const weatherImageData: WeatherImage = await getRandomBackground(currentWeather);
        setWeatherImage(weatherImageData);
      });
    });
  }, []);

  function getAllEvents() {
    apiCalendar.listUpcomingEvents(10).then((res: CalendarResponse) => {
      const calendarEvents: Item[] = res.result.items;

      setEvents(calendarEvents);
    });
  }

  return (
    <main
      className="main"
      style={{ backgroundImage: `url('${weatherImage}')` }}
    >
      <div className="main__container">
        <Time />
        <Days weatherDays={weatherDays} />
        {events.length ? <EventsList events={events} /> : null}
        <Button
          onClick={() => apiCalendar.handleAuthClick().then(() => getAllEvents())}
        >
          sign in
        </Button>
        <Button onClick={() => apiCalendar.handleSignoutClick()}>
          sign out
        </Button>
      </div>
    </main>
  );
}

export default App;
