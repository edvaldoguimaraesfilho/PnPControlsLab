import * as React from 'react';

import {
  IPropertyFieldColumnPickerWpProps
} from './IPropertyFieldColumnPickerWpProps';

const PropertyFieldColumnPickerWp:
  React.FC<IPropertyFieldColumnPickerWpProps> = ({
    description,
    list,
    column,
    multiColumn
  }) => {

    return (
      <section>
        <h2>PropertyFieldColumnPicker</h2>

        <p>{description}</p>

        <h3>Selected list</h3>

        <p>
          {list || 'No list selected'}
        </p>

        <h3>Selected column</h3>

        <p>
          {column || 'No column selected'}
        </p>

        <h3>Multiple selected columns</h3>

        {multiColumn && multiColumn.length > 0 ? (
          <ul>
            {multiColumn.map(
              (columnName: string, index: number) => (
                <li key={`${columnName}-${index}`}>
                  {columnName}
                </li>
              )
            )}
          </ul>
        ) : (
          <p>No columns selected</p>
        )}
      </section>
    );
  };

export default PropertyFieldColumnPickerWp;