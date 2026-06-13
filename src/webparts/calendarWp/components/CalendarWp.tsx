import * as React from 'react';
import { Calendar,IEvent } from '@pnp/spfx-controls-react/lib/calendar';
import { ICalendarWpProps } from './ICalendarWpProps';


const events: IEvent[] = [
   {
    id: '1',
    title: 'Weekly Sync: Development Team',
    start: '2025-07-08T10:00:00',
    end: '2025-07-08T11:00:00',
    location: 'Microsoft Teams',
    category: 'Meeting',
    isOnlineMeeting: true,
  },
  {
    id: '2',
    title: 'Project Deadline',
    start: "21/07/2025 15:00:00",
    end: "21/07/2025 16:00:00",
    importance: 'High',
  }
];


const CalendarWp: React.FC<{}> = ({}) => {
  return (
    
      
<Calendar  events={events} />


      
            
  );
};

export default CalendarWp;