import React, { useEffect, useState } from 'react';
import apiCalendar from './API/calendar';
import Button from './components/UI/Button/Button';
import weather from './API/weather';
import Time from './components/time/Time';
import getPosition from './API/geolocation';
import { Forecastday, Weather } from './types/weather';
import { CalendarResponse, Item } from './types/calendar';
import getRandomBackground from './API/background';
import Days from './components/weather/Days';
import EventsList from './components/calendar/EventsList';
import Input from './components/UI/Input/Input';

function App() {
  const [inputCountry, setInputCountry] = useState<string>('');
  const [weatherDays, setWeatherDays] = useState<Forecastday[]>([]);
  const [weatherImage, setWeatherImage] = useState<string>('');
  const [events, setEvents] = useState<Item[]>([]);

  useEffect(() => {
    getPosition().then((pos) => {
      weather.getWeather(pos).then(async (data: Weather) => {
        const forecastDays = data.forecast.forecastday;
        const currentWeather = data.current.condition.text;

        setWeatherDays(forecastDays);

        const weatherImageData: string = await getRandomBackground(currentWeather);
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

        <Input
          onChange={(e) => setInputCountry(e.target.value)}
          value={inputCountry}
          placeholder="Country"
        />

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
