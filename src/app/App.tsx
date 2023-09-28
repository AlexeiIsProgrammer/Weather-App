import React, { useState } from 'react';
import EventsList from '@Components/EventsList';
import ElasticSearch from '@Components/ElasticSearch';
import SignButton from '@Components/SignButton';
import Time from '@Components/Time';
import Days from '@Components/Days';
import Hours from '@Components/Hours';
import { EventItem } from '@Interfaces';
import Background from '@Components/Background';

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

              <SignButton setEvents={setEvents} />
            </MainSectionContainer>
          </MainSection>
        </MainContainer>
      </main>
    </>
  );
}

export default App;
