import * as React from 'react';
import { IMapControlWpProps } from './IMapControlWpProps';
import { Map, ICoordinates, MapType } from "@pnp/spfx-controls-react/lib/Map";


const mapControlWp: React.FC<IMapControlWpProps> = ({}) => {
  return (
    <Map titleText="New Test Map Control"
     coordinates={{ latitude: 51.507351, longitude: -0.127758 }}
     enableSearch={true} />
  );
}

export default mapControlWp;