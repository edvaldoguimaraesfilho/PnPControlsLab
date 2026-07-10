import * as React from 'react';
import { IPropertyPaneToggleWpProps } from './IPropertyPaneToggleWpProps';

const PropertyPaneToggleWp: React.FC <IPropertyPaneToggleWpProps> = (props) => {
  return (
  <div>

    <h1>Property Pane Toggle</h1>
<h1>{props.description}</h1>
    <p>
      Feature Status:
      <strong>
        {props.enableFeature ? " Enabled" : " Disabled"}
      </strong>
    </p>

  </div>
);
    }

  export default PropertyPaneToggleWp;
