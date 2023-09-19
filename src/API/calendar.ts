import ApiCalendar from 'react-google-calendar-api';
import { CalendarResponse, EventItem } from '@interfaces';

const config = {
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY || '',
  clientId: process.env.REACT_APP_GOOGLE_ACCESS_TOKEN || '',
  scope: 'https://www.googleapis.com/auth/calendar',
  discoveryDocs: [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
  ],
};

const apiCalendar = new ApiCalendar(config);

export async function getAllEvents(): Promise<EventItem[]> {
  const nowDate = new Date().toISOString();
  const endDate = new Date();
  endDate.setUTCHours(23, 59, 59, 999);

  const responseEventsList: CalendarResponse = await apiCalendar.listEvents({
    timeMin: nowDate,
    timeMax: endDate.toISOString(),
    showDeleted: true,
    orderBy: 'updated',
  });

  return responseEventsList.result.items;
}

export default apiCalendar;
