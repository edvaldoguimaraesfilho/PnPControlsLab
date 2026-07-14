import * as React from 'react';
import { IPropertyFieldNumberWpProps } from './IPropertyFieldNumberWpProps';

const PropertyFieldNumberWp: React.FC<IPropertyFieldNumberWpProps> = (props) => {
  return (
    <div>
      <h1>{props.description}</h1>
      <p>Number Value: {props.numberValue}</p>
      <p>Dark Theme: {props.isDarkTheme ? 'Yes' : 'No'}</p>
      <p>Environment Message: {props.environmentMessage}</p>
      <p>User Display Name: {props.userDisplayName}</p>
    </div>
  );
};

export default PropertyFieldNumberWp;