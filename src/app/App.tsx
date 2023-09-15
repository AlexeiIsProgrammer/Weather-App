import React, { useEffect, useState } from 'react';
import EventsList from '@components/Calendar/EventsList';
import getPosition from '@API/geolocation';
import ElasticSearch from '@components/ElasticSearch';
import SignButton from '@components/SignButton';
import Time from '@components/Time';
import Days from '@components/Weather/Days';
import Hours from '@components/Weather/Hours';
import { useAppSelector, useAppDispatch } from '@hooks/redux';
import { isWeatherExists } from '@utils/is-weather-exists';
import { EventItem } from '@interfaces';
import weatherSelector from '@store/selectors';
import { weatherPositionFetching } from '@store/reducers/weatherSlice';

import {
  Main,
  MainContainer,
  MainSection,
  MainSectionContainer,
} from './styles';

function App() {
  console.log('app render');

  const { weather, weatherImage } = useAppSelector(weatherSelector);

  const [events, setEvents] = useState<EventItem[]>([]);
  const dispatch = useAppDispatch();
  useEffect(() => {
    getPosition().then((pos) => {
      dispatch(weatherPositionFetching(pos));
    });

    console.log('render use effect');
  }, [dispatch]);

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
