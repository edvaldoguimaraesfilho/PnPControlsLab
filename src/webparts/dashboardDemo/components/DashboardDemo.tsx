import * as React from 'react';

import {
  Dashboard,
  WidgetSize,
  IWidget
} from '@pnp/spfx-controls-react/lib/Dashboard';

import { IDashboardDemoProps } from './IDashboardDemoProps';

export default class DashboardDemo extends React.Component<IDashboardDemoProps> {

  private widgets: IWidget[] = [
    {
      title: 'Documents',
      size: WidgetSize.Single,
      body: [
        {
          id: 'documents',
          title: 'Documents',
          content: <div>Total Documents: 125</div>
        }
      ]
    },
    {
      title: 'Sites',
      size: WidgetSize.Single,
      body: [
        {
          id: 'sites',
          title: 'Sites',
          content: <div>Total Sites: 18</div>
        }
      ]
    },
    {
      title: 'Storage',
      size: WidgetSize.Double,
      body: [
        {
          id: 'storage',
          title: 'Storage',
          content: <div>Used Storage: 1.8 TB</div>
        }
      ]
    },
    {
      title: 'Users',
      size: WidgetSize.Single,
      body: [
        {
          id: 'users',
          title: 'Users',
          content: <div>Active Users: 347</div>
        }
      ]
    }
  ];

  public render(): React.ReactElement<IDashboardDemoProps> {
    return (
      <Dashboard widgets={this.widgets} />
    );
  }
}