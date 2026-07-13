import * as React from 'react';
import { IPropertyFieldListPickerWpProps } from './IPropertyFieldListPickerWpProps';


const PropertyFieldListPickerWp: React.FC<IPropertyFieldListPickerWpProps> = (props) => {
  return (
    <div>
      <h1>{props.description}</h1>
      <p>Welcome, {props.userDisplayName}!</p>
      <p>Environment: {props.environmentMessage}</p>
      <p>Theme: {props.isDarkTheme ? 'Dark' : 'Light'}</p>
      <p>Selected List(s): {Array.isArray(props.lists) ? props.lists.join(', ') : props.lists}</p>
    </div>
  );
};

export default PropertyFieldListPickerWp;

