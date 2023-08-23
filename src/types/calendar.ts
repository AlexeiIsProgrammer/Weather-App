export interface CalendarResponse {
  result: Result;
  body: string;
  headers: Headers;
  status: number;
  statusText: null;
}

export interface Headers {
  cacheControl: string;
  contentEncoding: string;
  contentLength: string;
  contentType: string;
  date: string;
  expires: string;
  server: string;
  vary: string;
}

export interface Result {
  kind: string;
  etag: string;
  summary: string;
  description: string;
  updated: Date;
  timeZone: string;
  accessRole: string;
  defaultReminders: DefaultReminder[];
  nextSyncToken: string;
  items: Item[];
}

export interface DefaultReminder {
  method: string;
  minutes: number;
}

export interface Item {
  kind: string;
  etag: string;
  id: string;
  status: string;
  htmlLink: string;
  created: Date;
  updated: Date;
  summary: string;
  creator: Creator;
  organizer: Creator;
  start: End;
  end: End;
  iCalUID: string;
  sequence: number;
  reminders: Reminders;
  eventType: string;
}

export interface Creator {
  email: string;
  self: boolean;
}

export interface End {
  dateTime: Date;
  timeZone: string;
}

export interface Reminders {
  useDefault: boolean;
}
