import * as React from 'react';
import { Icon } from '@fluentui/react';


export const orderedItem = (
  item: any,
  index: number
): JSX.Element => {
  return (
    <span>
      <Icon
        iconName={item.iconName}
        style={{ paddingRight: '4px' }}
        aria-hidden="true"
      />

      {item.text}
    </span>
  );
};