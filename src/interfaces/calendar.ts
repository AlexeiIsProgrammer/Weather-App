export interface CalendarResponse {
  result: Result;
}

export interface Result {
  items: EventItem[];
}

export interface EventItem {
  id: string;
  htmlLink: string;
  summary: string;
  start: EventDate;
  end: EventDate;
}

export interface EventDate {
  dateTime: Date;
  timeZone: string;
}
