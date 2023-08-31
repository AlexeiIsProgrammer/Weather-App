import React, { useEffect, useState } from 'react';

import getPosition from '../API/geolocation';
import EventsList from '../components/Calendar/EventsList';
import Time from '../components/Time';
import Input from '../components/UI/Input';
import Days from '../components/Weather/Days';
import Hours from '../components/Weather/Hours';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { EventItem } from '../interfaces';
import { fetchWeather } from '../store/reducers/ActionCreators';
import { isWeatherExists } from '../utils/is-weather-exists';
import SignButton from '../components/SignButton';

import {
  Main,
  MainContainer,
  MainSection,
  MainSectionContainer,
} from './styles';

function App() {
  const dispatch = useAppDispatch();
  const { weather, weatherImage, clickedDay, isLoading, error } =
    useAppSelector((state) => state.weatherReducer);
  const [inputCity, setInputCity] = useState<string>('');
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | number>(0);

  const [events, setEvents] = useState<EventItem[]>([]);

  const setWeather = async (cityWeather: string): Promise<void> => {
    dispatch(fetchWeather(cityWeather));
  };

  useEffect(() => {
    getPosition().then((pos) => {
      setWeather(pos);
    });
  }, []);

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
    <Main
      $backgroundImage={
        isWeatherExists(weather) ? `url('${weatherImage}')` : ''
      }
    >
      <MainContainer>
        <MainSection className="main-block">
          <MainSectionContainer className="main-block__container">
            {events.length ? <EventsList events={events} /> : null}

            {isWeatherExists(weather) && <Time city={weather.location.name} />}
            <Input
              error={error}
              onChange={onChangeHandler}
              value={inputCity}
              placeholder="Country"
            />

            {isWeatherExists(weather) && !isLoading ? (
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

            <SignButton setEvents={setEvents} />
          </MainSectionContainer>
        </MainSection>
      </MainContainer>
    </Main>
  );
}

export default App;
