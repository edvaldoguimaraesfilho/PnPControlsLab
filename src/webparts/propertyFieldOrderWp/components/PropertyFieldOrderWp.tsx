import * as React from 'react';
import { IPropertyFieldOrderWpProps } from './IPropertyFieldOrderWpProps';
import { Icon } from '@fluentui/react';

const PropertyFieldOrderWp: React.FC<IPropertyFieldOrderWpProps>  = (props) => {
  return (
    <div>
      <h1>Property Field Order Web Part</h1>
      <p>This is a sample web part demonstrating the use of the PropertyFieldOrder control.</p>
      <p>Dark Theme: {props.isDarkTheme ? 'Yes' : 'No'}</p>
      <p>Environment Message: {props.environmentMessage}</p>
      <p>User Display Name: {props.userDisplayName}</p> 
      <p>Ordered Items:</p>
      <ul>
        {props.orderedItems.map((item, index) => (
          <li key={index}>
            {item.iconName && <Icon iconName={item.iconName} style={{ paddingRight: '4px' }} aria-hidden="true" />}
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}



export default PropertyFieldOrderWp;