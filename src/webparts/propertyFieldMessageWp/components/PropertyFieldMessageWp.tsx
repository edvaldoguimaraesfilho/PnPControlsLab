import * as React from 'react';
import { IPropertyFieldMessageWpProps } from './IPropertyFieldMessageWpProps';

const PropertyFieldMessageWp: React.FC<IPropertyFieldMessageWpProps> = (props ) => {
  return (
    <div>
      <h1>Property Field Message Web Part</h1>
      <p>This is a sample web part demonstrating the use of property fields.</p>
    </div>
  );
};

export default PropertyFieldMessageWp;