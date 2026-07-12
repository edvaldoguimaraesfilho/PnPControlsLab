import * as React from 'react';
import { IPropertyFieldButtonWpProps } from './IPropertyFieldButtonWpProps';

const PropertyFieldButtonWp: React.FC<IPropertyFieldButtonWpProps> = (props) => {
  return (
    <div>
      <h2>Property Field Button Web Part</h2>
      <p>{props.description}</p>
      
    </div>
  );
};

export default PropertyFieldButtonWp;