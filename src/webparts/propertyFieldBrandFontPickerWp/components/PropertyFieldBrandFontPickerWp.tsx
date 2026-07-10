import * as React from 'react';
import { IPropertyFieldBrandFontPickerWpProps } from './IPropertyFieldBrandFontPickerWpProps';

const PropertyFieldBrandFontPickerWp:
  React.FC<IPropertyFieldBrandFontPickerWpProps> = ({
    description,
    brandFont
  }) => {

    return (
      <section>
        <h2 style={{ fontFamily: brandFont }}>
          PropertyFieldBrandFontPicker
        </h2>

        <p style={{ fontFamily: brandFont }}>
          {description}
        </p>

        <p>
          Selected font: {brandFont}
        </p>
      </section>
    );
  };

export default PropertyFieldBrandFontPickerWp;