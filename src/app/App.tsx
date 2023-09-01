import React, { useEffect, useState } from 'react';

import getPosition from '../API/geolocation';
import EventsList from '../components/Calendar/EventsList';
import Time from '../components/Time';
import Days from '../components/Weather/Days';
import Hours from '../components/Weather/Hours';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { EventItem } from '../interfaces';
import { fetchWeather } from '../store/reducers/ActionCreators';
import { isWeatherExists } from '../utils/is-weather-exists';
import SignButton from '../components/SignButton';
import ElasticSearch from '../components/ElasticSearch';
import weatherSelector from '../store/selectors';

import {
  Main,
  MainContainer,
  MainSection,
  MainSectionContainer,
} from './styles';

function App() {
  console.log('app render');

  const dispatch = useAppDispatch();
  const { weather, weatherImage } = useAppSelector(weatherSelector);

  const [events, setEvents] = useState<EventItem[]>([]);

  const setWeather = async (cityWeather: string): Promise<void> => {
    dispatch(fetchWeather(cityWeather));
  };

  useEffect(() => {
    getPosition().then((pos) => {
      setWeather(pos);
    });
  }, []);

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

            <ElasticSearch />

            <Days />

            <Hours />

            <SignButton setEvents={setEvents} />
          </MainSectionContainer>
        </MainSection>
      </MainContainer>
    </Main>
  );
}

export default App;
