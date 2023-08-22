import ApiCalendar from 'react-google-calendar-api';

const config = {
  apiKey: 'AIzaSyDRoxDtmfR8u2IoKblFShjFYcd08hWYRnI',
  clientId:
    '434038276821-jef9peoirm176oka280b90oj7hdnfbnf.apps.googleusercontent.com',
  scope: 'https://www.googleapis.com/auth/calendar',
  discoveryDocs: [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
  ],
};

// const calendarID: Readonly<string> =
//   'https://www.googleapis.com/calendar/v3/calendars/alexshmulevtsov@gmail.com/events';

const apiCalendar = new ApiCalendar(config);
export default apiCalendar;
