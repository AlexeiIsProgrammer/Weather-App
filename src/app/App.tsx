import React, { useEffect, useState } from 'react';

import apiCalendar from '../API/calendar';
import Button from '../components/UI/Button';
import Time from '../components/Time';
import getPosition from '../API/geolocation';
import { CalendarResponse, Item } from '../interfaces/calendar';
import Days from '../components/Weather/Days';
import EventsList from '../components/Calendar/EventsList';
import Input from '../components/UI/Input';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchWeather } from '../store/reducers/ActionCreators';
import Hours from '../components/Weather/Hours';

function App() {
  const dispatch = useAppDispatch();
  const {
    weather, weatherImage, clickedDay, isLoading, error,
  } = useAppSelector((state) => state.weatherReducer);
  const [inputCity, setInputCity] = useState<string>('');
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | number>(0);

  const isWeatherExists = Object.keys(weather).length !== 0;

  const [events, setEvents] = useState<Item[]>([]);

  const [isSignIn, setIsSignIn] = useState<boolean>();

  const setWeather = async (cityWeather: string): Promise<void> => {
    dispatch(fetchWeather(cityWeather));
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

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    setInputCity(target.value);

    clearTimeout(timer);

    const newTimer = setTimeout(() => {
      setWeather(target.value);
    }, 2000);

    setTimer(newTimer);
  };

  return (
    <main
      className="main"
      style={
        isWeatherExists ? { backgroundImage: `url('${weatherImage}')` } : {}
      }
    >
      <div className="main__container">
        <section className="main-block">
          <div className="main-block__container">
            {events.length ? <EventsList events={events} /> : null}
            {!events.length && isSignIn && (
              <h1 style={{ textAlign: 'center' }}>
                Поздравляю, сегодня событий нет!
              </h1>
            )}

            {isWeatherExists && <Time city={weather.location.name} />}
            <Input
              error={error}
              onChange={onChangeHandler}
              value={inputCity}
              placeholder="Country"
            />

            {isWeatherExists && !isLoading ? (
              <Days
                currentDay={weather.current}
                weatherDays={weather.forecast.forecastday}
              />
            ) : (
              <h1>Идет загрузка погоды...</h1>
            )}

            {clickedDay !== null && (
              <Hours hours={weather.forecast.forecastday[clickedDay].hour} />
            )}

            {!isSignIn ? (
              <Button
                onClick={() => apiCalendar
                  .handleAuthClick()
                  .then(() => {
                    getAllEvents();
                    setIsSignIn(true);
                  })
                  .catch(() => {})}
              >
                Sign in
              </Button>
            ) : null}

            {isSignIn ? (
              <Button
                onClick={() => {
                  apiCalendar.handleSignoutClick();
                  setIsSignIn(false);
                  setEvents([]);
                }}
              >
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
