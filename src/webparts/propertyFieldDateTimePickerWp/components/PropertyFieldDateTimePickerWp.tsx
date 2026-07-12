import * as React from 'react';
import { IPropertyFieldDateTimePickerWpProps } from './IPropertyFieldDateTimePickerWpProps';  

const PropertyFieldDateTimePickerWp: React.FunctionComponent<IPropertyFieldDateTimePickerWpProps> = (props) => {
  return (
    <div>
      <h1>Property Field Date Time Picker Web Part</h1>
      <p>This is a sample web part that demonstrates the use of the PropertyFieldDateTimePicker control.</p>
      <p>Description: {props.description}</p>
      <p>Is Dark Theme: {props.isDarkTheme ? 'Yes' : 'No'}</p>
      <p>Environment Message: {props.environmentMessage}</p>
      <p>User Display Name: {props.userDisplayName}</p>
      <p>Selected Date Time: {props.datetime ? props.datetime.displayValue.toString() : 'No date selected'}</p>
    </div>
  );
};

export default PropertyFieldDateTimePickerWp;

