import * as React from 'react';
import { Persona } from '@fluentui/react/lib/Persona';
import { LivePersona } from '@pnp/spfx-controls-react/lib/LivePersona';
import { ServiceScope } from '@microsoft/sp-core-library';

export interface ILivePersonaWpProps {
  serviceScope: ServiceScope;
}

const LivePersonaWp: React.FC<ILivePersonaWpProps> = ({ serviceScope }) => {
  return (
    <LivePersona
      upn="edvaldo@"
      template={
        <Persona
          text="Edvaldo Filho"
          secondaryText="edvaldo"
          coinSize={48}
          
        />
      }
      serviceScope={serviceScope as any}
    />
  );
};

export default LivePersonaWp;