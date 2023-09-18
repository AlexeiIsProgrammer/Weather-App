import '@testing-library/jest-dom';
import { WeatherState } from '@store/types/interfaces';
// import EventsList from '@components/EventsList';

import { renderWithProviders } from '../test/index';

import App from './App';

const weatherReducer: WeatherState = {
  error: '',
  isLoading: false,
  clickedDay: null,
  weatherImage: '',
  weather: {
    location: {
      name: 'Minsk',
    },
    current: {
      temp_c: 36.8,
      condition: {
        icon: './sun.jpg',
        text: 'sunny',
      },
    },
    forecast: {
      forecastday: [
        {
          date: new Date('05-10-2023'),
          day: {
            avgtemp_c: 34.7,
            condition: {
              icon: './rain.jpeg',
              text: 'rainy',
            },
          },
          hour: [
            {
              time: '23:13:10',
              temp_c: 12.5,
              condition: {
                icon: './coldy.png',
                text: 'very cold',
              },
            },
          ],
        },
      ],
    },
  },
};

test('should render app', () => {
  renderWithProviders(<App />, { preloadedState: { weatherReducer } });
});

test('should render app with events', () => {
  renderWithProviders(<App />, { preloadedState: { weatherReducer } });

  // const eventsArray = [
  //   {
  //     id: '1',
  //     htmlLink: '',
  //     summary: '',
  //     start: {
  //       dateTime: new Date('2022-12-12'),
  //       timeZone: '',
  //     },
  //     end: { dateTime: new Date('2022-12-12'), timeZone: '' },
  //   },
  // ];

  // const wrapper = mount(<EventsList events={eventsArray} />);
  // expect(wrapper.state('events')).not();
  // wrapper.instance().setEvents(1);
  expect(wrapper.state('events')).toBe(1);
});
