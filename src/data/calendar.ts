export type CalendarEvent = {
  time: string;
  currency: string;
  event: string;
  forecast: string;
  previous: string;
  impact: 1 | 2 | 3;
};

export const calendarEvents: CalendarEvent[] = [
  { time: "08:30", currency: "USD", event: "Core CPI (MoM)", forecast: "0.2%", previous: "0.2%", impact: 3 },
  { time: "10:00", currency: "USD", event: "Initial Jobless Claims", forecast: "235K", previous: "232K", impact: 2 },
  { time: "14:00", currency: "USD", event: "FOMC Member Speaks", forecast: "-", previous: "-", impact: 3 },
  { time: "16:00", currency: "USD", event: "Existing Home Sales", forecast: "3.95M", previous: "3.90M", impact: 1 },
  { time: "18:30", currency: "USD", event: "Fed Balance Sheet", forecast: "-", previous: "-", impact: 1 },
];