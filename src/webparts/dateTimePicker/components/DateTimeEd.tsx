import { DateTimePicker, DateConvention, TimeConvention } from '@pnp/spfx-controls-react/lib/DateTimePicker';

import * as React from 'react';




const DateTimeEd: React.FC<{}>= ({})=> {

    
const [date, setDate] = React.useState<Date | undefined>(new Date());

  const handleChange = (newDate: Date | undefined) => {
    console.log("Nova data:", newDate);
    setDate(newDate);
  };



return(
    
        <div>
<DateTimePicker label="DateTime Picker - 12h"
                dateConvention={DateConvention.DateTime}
                timeConvention={TimeConvention.Hours12} />

// Controlled
<DateTimePicker label="DateTime Picker - 24h"
                dateConvention={DateConvention.DateTime}
                timeConvention={TimeConvention.Hours24}
                value={date}
                onChange={handleChange} /></div>


);



}

export default DateTimeEd;
