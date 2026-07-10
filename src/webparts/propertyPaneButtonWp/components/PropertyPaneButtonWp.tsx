import * as React from 'react';
import { IPropertyPaneButtonWpProps } from './IPropertyPaneButtonWpProps';

const PropertyPaneButtonWp: React.FC <IPropertyPaneButtonWpProps> = (props ) => {
  return (
    <div>
      <h1>Property Pane Button Web Part</h1>
      <p>This is a sample web part demonstrating the use of a property pane button.</p>
      <p>Description: {props.description}</p>
    </div>
  );
};

export default PropertyPaneButtonWp;
