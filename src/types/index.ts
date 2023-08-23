type Diapasone = {
  dateTime: string;
  timeZone: string;
};

type Default = {
  useDefault: boolean;
  overrides: Override[];
};

type Override = {
  method: string;
  minutes: number;
};

export interface CalendarEvent {
  id: number;
  summary: string;
  location: string;
  start: Diapasone;
  end: Diapasone;
  recurrence: string[];
  attendees: [];
  reminders: Default;
}
