import * as React from 'react';
import { IPropertyFieldMultiSelectWpProps } from './IPropertyFieldMultiSelectWpProps';

const PropertyFieldMultiSelectWp: React.FC <IPropertyFieldMultiSelectWpProps> = (props) => {
  return (
    <div>
      <h1>Property Field Multi Select Web Part</h1>
      <p>This is a sample web part demonstrating the use of property fields with multi select.</p>
      <p>Description: {props.description}</p>
      <p>Selected Values: {props.multiSelect.join(', ')}</p>
    </div>
  );
}

export default PropertyFieldMultiSelectWp;