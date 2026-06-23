import * as React from 'react';
import { IModernTaxonomyPickerWpProps } from './IModernTaxonomyPickerWpProps';
import { ModernTaxonomyPicker, } from "@pnp/spfx-controls-react/lib/ModernTaxonomyPicker";



const ModernTaxonomyPickerWp: React.FC<IModernTaxonomyPickerWpProps> = ({ context }) => {
  const onTaxPickerChange:any = (terms: any[]) => {
    console.log("Terms", terms);
  };

  return (
    <ModernTaxonomyPicker allowMultipleSelections={true}
  termSetId=""
  panelTitle="Select Term"
  label="Taxonomy Picker"
  context={context}
  onChange={onTaxPickerChange}
/>
  );
};

export default ModernTaxonomyPickerWp;