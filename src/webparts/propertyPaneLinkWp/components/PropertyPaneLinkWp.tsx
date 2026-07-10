import * as React from 'react';
import { IPropertyPaneLinkWpProps } from './IPropertyPaneLinkWpProps';

const PropertyPaneLinkWp: React.FC<IPropertyPaneLinkWpProps> = (props) => {
  return (
    <div>
      <h1>Property Pane Link Web Part</h1>
      <h1>{props.description}</h1>
      <p>This is a sample web part demonstrating the use of a property pane link.</p>
    </div>
  );
};

export default PropertyPaneLinkWp;  

