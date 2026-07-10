import * as React from 'react';
import { IPropertyPaneChoiceGroupWpProps } from './IPropertyPaneChoiceGroupWpProps';


const PropertyPaneChoiceGroupWp: React.FC<IPropertyPaneChoiceGroupWpProps> = (props) => {
  return (
    <div>
      <h1>Property Pane Choice Group Web Part</h1>
      <p>This is a sample web part demonstrating the use of a choice group in the property pane.</p>
      <p>Description: {props.description}</p>
      <p>Selected Theme: {props.selectedTheme}</p>
    </div>
  );
};

export default PropertyPaneChoiceGroupWp;