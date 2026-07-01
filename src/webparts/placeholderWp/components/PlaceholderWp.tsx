import * as React from 'react';
import { Placeholder } from "@pnp/spfx-controls-react/lib/Placeholder";
import { IPlaceholderWpProps } from './IPlaceholderWpProps';


const PlaceholderWp: React.FC<IPlaceholderWpProps> = ({context}) => {
  const _onConfigure = () => {
  // Context of the web part
  context.propertyPane.open();
}
  
  
  return (
    <Placeholder iconName='Edit'
             iconText='Configure your web part'
             description='Please configure the web part.'
             buttonLabel='Configure'
             onConfigure={_onConfigure}
              />
  );
};

export default PlaceholderWp; 