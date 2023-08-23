import React, { useEffect, useState } from 'react';
import apiCalendar from './API/calendar';
import Button from './components/UI/Button/Button';
import Time from './components/time/Time';
import getPosition from './API/geolocation';
import { Weather } from './types/weather';
import { CalendarResponse, Item } from './types/calendar';
import getRandomBackground from './API/background';
import Days from './components/weather/Days';
import EventsList from './components/calendar/EventsList';
import Input from './components/UI/Input/Input';
import WeatherAPI from './API/weather';

function App() {
  const [inputCity, setInputCity] = useState<string>('');
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | null>(
    null,
  );

  const [weatherDays, setWeatherDays] = useState<Weather | null>(null);
  const [weatherImage, setWeatherImage] = useState<string>('');
  const [events, setEvents] = useState<Item[]>([]);

  const [city, setCity] = useState<string>('');
  const [isSignIn, setIsSignIn] = useState<boolean>();

  const setWeather = (cityWeather: string): void => {
    WeatherAPI.getWeather(cityWeather).then(async (data: Weather) => {
      if (!data) return;

      setCity(data.location.name);

      const currentWeather = data.current.condition.text;

      setWeatherDays(data);

      const weatherImageData: string = await getRandomBackground(currentWeather);
      setWeatherImage(weatherImageData);
    });
  };

  useEffect(() => {
    getPosition().then((pos) => {
      setWeather(pos);
    });
  }, []);

  function getAllEvents() {
    const nowDate = new Date().toISOString();
    const endDate = new Date();
    endDate.setUTCHours(23, 59, 59, 999);

    apiCalendar
      .listEvents({
        timeMin: nowDate,
        timeMax: endDate.toISOString(),
        showDeleted: true,
        orderBy: 'updated',
      })
      .then((res: CalendarResponse) => {
        const calendarEvents: Item[] = res.result.items;

        setEvents(calendarEvents);
      });
  }

  const onChangeHandler = (e: Event) => {
    const { target } = e;

    if (target instanceof HTMLInputElement) {
      setInputCity(target.value);

      clearTimeout(timer);

      const newTimer = setTimeout(() => {
        setWeather(target.value);
      }, 2000);

      setTimer(newTimer);
    }
  };

  return (
    <main
      className="main"
      style={{ backgroundImage: `url('${weatherImage}')` }}
    >
      <div className="main__container">
        {events.length ? <EventsList events={events} /> : null}

        <section className="main-block">
          <div className="main-block__container">
            <Time city={city} />
            <Input
              onChange={onChangeHandler}
              value={inputCity}
              placeholder="Country"
            />

            {weatherDays ? <Days weatherDays={weatherDays} /> : null}

            {!isSignIn ? (
              <Button
                onClick={() => apiCalendar.handleAuthClick().then(() => {
                  getAllEvents();
                  setIsSignIn(true);
                })}
              >
                Sign in
              </Button>
            ) : null}

            {isSignIn ? (
              <Button onClick={() => apiCalendar.handleSignoutClick()}>
                Sign out
              </Button>
            ) : null}
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
