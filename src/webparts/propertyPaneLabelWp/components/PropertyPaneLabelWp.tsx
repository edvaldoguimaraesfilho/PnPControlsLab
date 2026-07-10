import * as React from 'react';
import { IPropertyPaneLabelWpProps } from './IPropertyPaneLabelWpProps';

const PropertyPaneLabelWp: React.FC<IPropertyPaneLabelWpProps> = (props) => {
  return (
    <div>
      <h1>Property Pane Label Web Part</h1>
      <h1>{props.description}</h1>
      <p>This is a sample web part demonstrating the use of a property pane label.</p>
    </div>
  );
};

export default PropertyPaneLabelWp;