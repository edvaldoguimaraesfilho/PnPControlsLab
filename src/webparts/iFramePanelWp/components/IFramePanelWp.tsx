import * as React from "react";
import { useState } from "react";
import { IFramePanel } from "@pnp/spfx-controls-react/lib/IFramePanel";
import { PanelType } from "@fluentui/react/lib/Panel";

const IFramePanelWp: React.FC = () => {
  const [iFrameUrl, setIFrameUrl] = useState<string>("https://www.microsoft.com");
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const onDismiss = () => {
    setIsOpen(false);
  };

  const onIframeLoaded = () => {
    console.log("IFrame carregado!");
  };

  return (
    <div>
      <IFramePanel
        url={iFrameUrl}
        type={PanelType.medium}
        headerText="Panel Title"
        closeButtonAriaLabel="Close"
        isOpen={isOpen}
        onDismiss={onDismiss}
        iframeOnLoad={onIframeLoaded}
      />
    </div>
  );
};

export default IFramePanelWp;
