import * as React from 'react';   
import { IPropertyPaneMultilineTextWpProps } from './IPropertyPaneMultilineTextWpProps';

const PropertyPaneMultilineTextWp: React.FC<IPropertyPaneMultilineTextWpProps> = (props) => {
  return (
    <div>
      <h1>Property Pane Multiline Text Web Part</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default PropertyPaneMultilineTextWp;