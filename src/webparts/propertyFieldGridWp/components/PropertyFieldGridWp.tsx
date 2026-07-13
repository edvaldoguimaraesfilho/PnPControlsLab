import * as React from 'react';
import { IPropertyFieldGridWpProps } from './IPropertyFieldGridWpProps';

const PropertyFieldGridWp: React.FC<IPropertyFieldGridWpProps> = (props) => {
  return (
    <div>
      <h2>{props.description}</h2>
      <p>Welcome, {props.userDisplayName}!</p>
      <p>Environment: {props.environmentMessage}</p>
      <p>Dark Theme: {props.isDarkTheme ? 'Yes' : 'No'}</p>
      <ul>
        {props.gridItems.map(item => (
          <li key={item.key}>
            {item.icon} {item.title}: {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PropertyFieldGridWp;