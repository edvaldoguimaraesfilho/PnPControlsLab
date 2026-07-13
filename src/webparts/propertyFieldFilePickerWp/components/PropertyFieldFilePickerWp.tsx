import * as React from 'react';
import { IPropertyFieldFilePickerWpProps } from './IPropertyFieldFilePickerWpProps';


const PropertyFieldFilePickerWp: React.FunctionComponent<IPropertyFieldFilePickerWpProps> = (props) => {
  return (
    <div>
      <h2>Property Field File Picker Web Part</h2>
      <p>{props.description}</p>
      <p>Environment Message: {props.environmentMessage}</p>
      <p>User Display Name: {props.userDisplayName}</p>
      <p>Is Dark Theme: {props.isDarkTheme ? 'Yes' : 'No'}</p>
      <p>File Picker Result: {props.filePickerResult ? JSON.stringify(props.filePickerResult) : 'No file selected'}</p>
    </div>
  );
};

export default PropertyFieldFilePickerWp;