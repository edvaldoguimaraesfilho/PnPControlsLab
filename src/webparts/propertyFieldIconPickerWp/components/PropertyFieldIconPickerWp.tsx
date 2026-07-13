import * as React from 'react';
import { IPropertyFieldIconPickerWpProps } from './IPropertyFieldIconPickerWpProps';

const PropertyFieldIconPickerWp: React.FC<IPropertyFieldIconPickerWpProps> = (props) => {
  return (
    <div>
      <h2>Property Field Icon Picker Web Part</h2>
      <p>Description: {props.description}</p>
      <p>Selected Icon: {props.iconPicker}</p>
    </div>
  );
}

export default PropertyFieldIconPickerWp;