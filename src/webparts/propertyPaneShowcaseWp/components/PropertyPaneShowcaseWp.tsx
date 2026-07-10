import * as React from 'react';
import { IPropertyPaneShowcaseWpProps } from './IPropertyPaneShowcaseWpProps';

const PropertyPaneShowcaseWp: React.FC<IPropertyPaneShowcaseWpProps> = (props) => {
  return (
    <div>

      {props.showTitle && (
        <h1 style={{ color: props.selectedColor }}>
          {props.title}
        </h1>
      )}

      <p>{props.description}</p>

      <p>
        Feature:
        <strong>
          {props.enableFeature ? ' Enabled' : ' Disabled'}
        </strong>
      </p>

      <p>
        Theme: <strong>{props.selectedTheme}</strong>
      </p>

      <p>
        Maximum Items: <strong>{props.maxItems}</strong>
      </p>

    </div>
  );
};

export default PropertyPaneShowcaseWp;