import React, { useEffect, useState } from 'react';

import apiCalendar from '../API/calendar';
import getPosition from '../API/geolocation';
import EventsList from '../components/Calendar/EventsList';
import Time from '../components/Time';
import Button from '../components/UI/Button';
import Input from '../components/UI/Input';
import Days from '../components/Weather/Days';
import Hours from '../components/Weather/Hours';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { CalendarResponse, EventItem } from '../interfaces';
import { fetchWeather } from '../store/reducers/ActionCreators';

import {
  Main,
  MainContainer,
  MainSection,
  MainSectionContainer,
} from './styles';

function App() {
  const dispatch = useAppDispatch();
  const {
    weather, weatherImage, clickedDay, isLoading, error,
  } = useAppSelector((state) => state.weatherReducer);
  const [inputCity, setInputCity] = useState<string>('');
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | number>(0);

  const isWeatherExists = Object.keys(weather).length !== 0;

  const [events, setEvents] = useState<EventItem[]>([]);

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
        const calendarEvents: EventItem[] = res.result.items;

        setEvents(calendarEvents);
      });
  }

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    setInputCity(target.value);
  };

  useEffect(() => {
    clearTimeout(timer);

    const newTimer = setTimeout(() => {
      setWeather(inputCity);
    }, 2000);

    setTimer(newTimer);
  }, [inputCity]);

  return (
    <Main $backgroundImage={isWeatherExists ? `url('${weatherImage}')` : ''}>
      <MainContainer>
        <MainSection className="main-block">
          <MainSectionContainer className="main-block__container">
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
          </MainSectionContainer>
        </MainSection>
      </MainContainer>
    </Main>
  );
}

export default App;
