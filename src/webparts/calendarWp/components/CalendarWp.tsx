import * as React from 'react';
import { Calendar, IEvent } from '@pnp/spfx-controls-react/lib/calendar';
import { ICalendarWpProps } from './ICalendarWpProps';

const events: IEvent[] = [
  {
    id: '1',
    title: 'Weekly Sync: Development Team',
    start: '2025-02-15T10:00:00',
    end: '2025-02-15T11:00:00',
    location: 'Microsoft Teams',    
    category: 'Meeting',
    isOnlineMeeting: true,
  },
  {
    id: '2',
    title: 'Project Deadline',
    start: '2025-02-21T23:59:00',
    end: '2025-02-21T23:59:00',
    category: 'Deadline',
    importance: 'High',
  },
];


const CalendarWp: React.FC<ICalendarWpProps> = () => {
  return (
    <Calendar
      events={events}
      height={800}
      
      onViewChange={(view) => console.log(`View changed to: ${view}`)}
      onDayChange={(date) => console.log(`Day changed to: ${date}`)}
      onWeekChange={(date) => console.log(`Week changed to: ${date}`)}
      onMonthChange={(date) => console.log(`Month changed to: ${date}`)}
      onNext={(date) => console.log(`Navigated to next date: ${date}`)}
      onPrev={(date) => console.log(`Navigated to previous date: ${date}`)}
    />
  );
};

export default CalendarWp;