import * as React from 'react';
import { IPropertyFieldGuidWpProps } from './IPropertyFieldGuidWpProps';

const PropertyFieldGuidWp: React.FC<IPropertyFieldGuidWpProps> = (props) => {
  return (
    <div>
      <h2>Property Field Guid Web Part</h2>
      <p>Description: {props.description}</p>
      <p>GUID: {props.guid}</p>
      <p>Is Dark Theme: {props.isDarkTheme ? 'Yes' : 'No'}</p>
      <p>Environment Message: {props.environmentMessage}</p>
      <p>User Display Name: {props.userDisplayName}</p>
    </div>
  );
} 
export default PropertyFieldGuidWp;