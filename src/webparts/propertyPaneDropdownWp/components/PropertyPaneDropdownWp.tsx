import * as React from 'react';
import { IPropertyPaneDropdownWpProps } from './IPropertyPaneDropdownWpProps';

const PropertyPaneDropdownWp: React.FC<IPropertyPaneDropdownWpProps> = (props) => {
  return (
    <div>
      <h1>Property Pane Dropdown Web Part</h1>
      <p>Selected Color: {props.selectedColor}</p>
    </div>
  );
};

export default PropertyPaneDropdownWp;