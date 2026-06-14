import * as React from 'react';
import { useState, useCallback } from 'react';
import { IFrameDialog } from "@pnp/spfx-controls-react/lib/IFrameDialog";
import { DialogType } from '@fluentui/react';

export interface IIFrameDialogWpProps {
  url: string;
}

const IFrameDialogWp: React.FC<IIFrameDialogWpProps> = ({ url }) => {

  const [hideDialog, setHideDialog] = useState<boolean>(true);

  const onIframeLoaded = useCallback(() => {
    console.log('Iframe carregado');
  }, []);

  const onDialogDismiss = useCallback(() => {
    setHideDialog(true);
  }, []);

  return (
    <>
      <button onClick={() => setHideDialog(false)}>
        Abrir Dialog
      </button>

      <IFrameDialog
        url={url}
        iframeOnLoad={onIframeLoaded}
        hidden={hideDialog}
        onDismiss={onDialogDismiss}
        modalProps={{
          isBlocking: true,
          containerClassName: 'dialogContainer'
        }}
        dialogContentProps={{
          type: DialogType.close,
          showCloseButton: true
        }}
        width={'570px'}
        height={'315px'}
      />
    </>
  );
};

export default IFrameDialogWp;