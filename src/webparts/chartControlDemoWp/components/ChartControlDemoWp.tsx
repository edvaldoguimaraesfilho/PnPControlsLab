import * as React from 'react';

import {
  ChartControl,
  ChartType
} from '@pnp/spfx-controls-react/lib/ChartControl';


import { IChartControlDemoProps } from './IChartControlDemoWpProps';

export const ChartControlDemo: React.FC<IChartControlDemoProps> = () => {

  const data = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May'
    ],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2]
      }
    ]
  };

  const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true
    }
  }
};

  return (
    <ChartControl
      type={ChartType.Bar}
      data={data}
      options={options}
    />
  );
};

export default ChartControlDemo;