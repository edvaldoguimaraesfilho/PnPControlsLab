import * as React from 'react';
import { useState } from 'react';
import { IconPicker } from '@pnp/spfx-controls-react/lib/IconPicker';

const IconPickerWp: React.FC = () => {

  const [icon, setIcon] = useState<string>('');

  return (
    <IconPicker
      buttonLabel={'Icon'}
      onChange={(iconName: string) => { setIcon(iconName); }}
      onSave={(iconName: string) => { setIcon(iconName); }}
    />
  );
};

export default IconPickerWp;
``