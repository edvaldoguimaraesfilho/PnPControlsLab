import * as React from 'react';
import { IconButton } from '@fluentui/react';
import { ContextualMenuItemType } from '@fluentui/react/lib/ContextualMenu';

import { IECBProps } from './IECBProps';


const ECB: React.FC<IECBProps> = ({ item }) => {

  const handleClick = React.useCallback((source: string) => {
    alert(`${source} clicked`);
  }, []);

  return (
    <div >{item.displayName}
      <IconButton
        id="ContextualMenuButton1"        
        iconProps={{ iconName: 'MoreVertical' }}
        menuIconProps={{ iconName: '' }}
        menuProps={{
          shouldFocusOnMount: true,
          items: [
            {
              key: 'action1',
              text: 'Action 1',
              onClick: () =>
                handleClick(`${item.displayName} Action 1`)
            },
            {
              key: 'divider_1',
              itemType: ContextualMenuItemType.Divider
            },
            {
              key: 'action2',
              text: 'Action 2',
              onClick: () =>
                handleClick(`${item.email} Action 2`)
            },
            {
              key: 'action3',
              text: 'Action 3',
              onClick: () =>
                handleClick(`${item.managers.map((m: any) => m.displayName).join(', ')} Action 3`)
            },
            {
              key: 'disabled',
              text: 'Disabled action',
              disabled: true
            }
          ]
        }}
      />
    </div>
  );
};

export default ECB;