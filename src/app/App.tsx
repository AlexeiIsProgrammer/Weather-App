import React, { useState } from 'react';
import EventsList from '@components/EventsList';
import ElasticSearch from '@components/ElasticSearch';
import SignButton from '@components/SignButton';
import Time from '@components/Time';
import Days from '@components/Days';
import Hours from '@components/Hours';
import { EventItem } from '@interfaces';
import Background from '@components/Background';
import { ErrorBoundary } from 'react-error-boundary';

import { MainContainer, MainSection, MainSectionContainer } from './styles';

function App() {
  const [events, setEvents] = useState<EventItem[]>([]);

  return (
    <>
      <Background />
      <main>
        <MainContainer>
          <MainSection className="main-block">
            <MainSectionContainer className="main-block__container">
              {events.length ? <EventsList events={events} /> : null}

              <Time />

              <ElasticSearch />

              <Days />

              <Hours />

              <ErrorBoundary fallback={<h1>No connection with gapi..</h1>}>
                <SignButton setEvents={setEvents} />
              </ErrorBoundary>
            </MainSectionContainer>
          </MainSection>
        </MainContainer>
      </main>
    </>
  );
}

export default App;
