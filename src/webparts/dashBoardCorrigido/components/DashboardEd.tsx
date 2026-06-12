import * as React from 'react';
import { WidgetSize, Dashboard } from '@pnp/spfx-controls-react/lib/Dashboard';

import {
  Icon,
  Text,
  Link
} from '@fluentui/react';




const customizedLinkExample = {
      href: "#",
      title: "This is a customized link!",
      color: "red",
      target: "_top"
    };
const calloutItemsExample = [
  {
    id: "action_1",
    title: "Info",
    icon: <Icon iconName={'Edit'} />,
  },
  { id: "action_2", title: "Popup", icon: <Icon iconName={'Add'} /> },
];

const DashboardEd: React.FC<{}>= ({})=> {
    

    return (
      <Dashboard
  widgets={[{
    title: "Card 1",
    desc: "Last updated Monday, April 4 at 11:15 AM (PT)",
    widgetActionGroup: calloutItemsExample,
    size: WidgetSize.Triple,
    body: [
      {
        id: "t1",
        title: "Tab 1",
        content: (
          <Text>
            Content #1
          </Text>
        ),
      },
      {
        id: "t2",
        title: "Tab 2",
        content: (
          <Text>
            Content #2
          </Text>
        ),
      },
      {
        id: "t3",
        title: "Tab 3",
        content: (
          <Text>
            Content #3
          </Text>
        ),
      },
    ],
    
  },
  {
    title: "Card 2",
    size: WidgetSize.Single,
    
  },
  {
    title: "Card 3",
    size: WidgetSize.Double,
    
  }]} />
    )}

    export default DashboardEd;
