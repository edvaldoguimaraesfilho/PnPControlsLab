import * as React from 'react';
import { AdaptiveCardHost } from '@pnp/spfx-controls-react/lib/AdaptiveCardHost';
import { IAdaptiveCardHostDemoProps } from './IAdaptiveCardHostDemoProps';

const AdaptiveCardHostDemo: React.FC<IAdaptiveCardHostDemoProps> = () => {

  const card = {
    type: "AdaptiveCard",
    version: "1.5",
    body: [
      {
        type: "TextBlock",
        size: "Large",
        weight: "Bolder",
        text: "PnP AdaptiveCardHost"
      },
      {
        type: "TextBlock",
        text: "Adaptive Card rendered inside an SPFx Web Part using PnP Controls.",
        wrap: true
      }
    ]
  };

  return (
    <AdaptiveCardHost
    card={card}
    onInvokeAction={() => {
      console.log('Adaptive Card action invoked');
    }}
    onError={(error: Error) => {
      console.error(error);
    }}
  />
  );
};

export default AdaptiveCardHostDemo;