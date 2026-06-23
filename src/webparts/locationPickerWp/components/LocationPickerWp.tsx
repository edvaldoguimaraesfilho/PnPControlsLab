import * as React from 'react';
import { LocationPicker,ILocationPickerItem, ILocationPickerProps } from  "@pnp/spfx-controls-react/lib/LocationPicker";
import { ILocationPickerWpProps } from './ILocationPickerWpProps';

const LocationPickerWp: React.FC<ILocationPickerWpProps> = ({context}) => {
  return (
    <LocationPicker
          context={context}
          label="Location"
          onChange={(locValue: ILocationPickerItem) => {
            console.log(locValue.DisplayName + ", " + locValue.Address?.Street)
          }
          }/>
  );
};

export default LocationPickerWp;