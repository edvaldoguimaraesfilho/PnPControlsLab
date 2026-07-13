import * as React from 'react';
import { IPropertyFieldFolderPickerWpProps } from './IPropertyFieldFolderPickerWpProps';

const PropertyFieldFolderPickerWp: React.FC<IPropertyFieldFolderPickerWpProps> = (props) => {
  return (
    <div>
      <h2>{props.description}</h2>
      <p>Welcome, {props.userDisplayName}!</p>
      <p>Environment: {props.environmentMessage}</p>
      <p>Dark Theme: {props.isDarkTheme ? 'Yes' : 'No'}</p>
      <p>Selected Folder: {props.folderPicker ? props.folderPicker.Name : 'None'}</p>
    </div>
  );
}

export default PropertyFieldFolderPickerWp;