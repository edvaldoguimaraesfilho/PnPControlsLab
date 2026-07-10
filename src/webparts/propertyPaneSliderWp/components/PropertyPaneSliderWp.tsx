import * as React from 'react';
import { IPropertyPaneSliderWpProps } from './IPropertyPaneSliderWpProps';

const PropertyPaneSliderWp: React.FC <IPropertyPaneSliderWpProps> = (props) => {
  return (
    <div>
      <h1>Property Pane Slider Web Part</h1>
      <p>This is a sample web part demonstrating the use of a property pane slider.</p>
      <p>Description: {props.description}</p>
      <p>Maximum Items: {props.maxItems}</p>
      
    </div>
  );
};

export default PropertyPaneSliderWp;