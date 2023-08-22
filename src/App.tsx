import React, { useEffect, useState } from 'react';
import Event from './components/Event';
import apiCalendar from './API/calendar';
import Button from './components/UI/Button/Button';
import weather from './API/weather';
import Time from './components/Time';
import getPosition from './API/geolocation';
import Day from './components/Day';
import { Forecastday, Weather } from './types/weather';
import { CalendarResponse, Item } from './types/calendar';

function App() {
  // const calendarID = process.env.REACT_APP_CALENDAR_ID as string;
  // const apiKey = process.env.REACT_APP_GOOGLE_API_KEY as string;
  // const accessToken = process.env.REACT_APP_GOOGLE_ACCESS_TOKEN;

  const [weatherDays, setWeatherDays] = useState<Forecastday[]>([]);
  const [events, setEvents] = useState<Item[]>([]);

  useEffect(() => {
    getPosition().then((pos) => {
      weather.getFiveDayWeather(pos).then((data: Weather) => {
        setWeatherDays(data.forecast.forecastday);
      });
    });
  }, []);

  function getAllEvents() {
    // const curDate = new Date();

    // const plus10DaysDate = (date: Date) => {
    //   date.setDate(curDate.getDate() + 10);
    //   return date;
    // };

    // {
    //   timeMin: curDate.toISOString(),
    //   timeMax: plus10DaysDate(curDate).toISOString(),
    //   showDeleted: true,
    //   maxResults: 10,
    //   orderBy: 'updated',
    // }

    apiCalendar.listUpcomingEvents(10).then((res: CalendarResponse) => {
      const calendarEvents: Item[] = res.result.items;

      setEvents(calendarEvents);
    });
  }

  return (
    <>
      <div>
        {weatherDays.map((day) => (
          <Day key={Math.random()} weather={day} />
        ))}
      </div>
      <div>
        <Time />
        {events.map((event: Item) => (
          <li key={event.id}>
            <Event event={event} />
          </li>
        ))}
      </div>
      <Button
        onClick={() => apiCalendar.handleAuthClick().then((user) => console.log(user))}
      >
        sign in
      </Button>
      <Button onClick={() => apiCalendar.handleSignoutClick()}>sign out</Button>
      <Button onClick={() => getAllEvents()}>get all events</Button>
    </>
  );
}

export default App;
