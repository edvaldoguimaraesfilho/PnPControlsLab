import * as React from 'react';

import {
  IPickerTerms
} from '@pnp/spfx-property-controls/lib/PropertyFieldEnterpriseTermPicker';

import {
  IPropertyFieldEnterpriseTermPickerWpProps
} from './IPropertyFieldEnterpriseTermPickerWpProps';

const PropertyFieldEnterpriseTermPickerWp:
React.FC<IPropertyFieldEnterpriseTermPickerWpProps> = ({
  description,
  terms
}) => {

  const selectedTerms: IPickerTerms = terms || [];

  return (
    <section>
      <h2>Enterprise Term Picker</h2>

      <p>{description}</p>

      <h3>Selected terms</h3>

      {selectedTerms.length === 0 ? (
        <p>No terms selected.</p>
      ) : (
        <ul>
          {selectedTerms.map((term) => (
            <li key={term.key}>
              <strong>{term.name}</strong>

              <div>
                Path: {term.path}
              </div>

              <div>
                Term Set: {term.termSetName || term.termSet}
              </div>

              <div>
                Term ID: {term.key}
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default PropertyFieldEnterpriseTermPickerWp;