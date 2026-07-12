import * as React from 'react';

import { IPropertyFieldColorPickerWpProps } from './IPropertyFieldColorPickerWpProps';

const PropertyFieldColorPickerWp: React.FunctionComponent<IPropertyFieldColorPickerWpProps> = (props) => {
  return (
    <div>
      <h1>Property Field Color Picker Web Part</h1>
      <p>This is a sample web part that demonstrates the use of the PropertyFieldColorPicker control.</p>
      <p>Description: {props.description}</p>
      <p>User Display Name: {props.userDisplayName}</p>
      <p>Environment Message: {props.environmentMessage}</p>
      <p>Is Dark Theme: {props.isDarkTheme ? 'Yes' : 'No'}</p>
      <p>Selected Color: {props.color}</p>
      <div style={{ backgroundColor: props.color, width: '100px', height: '100px' }}></div>
    </div>
  );
};

export default PropertyFieldColorPickerWp;