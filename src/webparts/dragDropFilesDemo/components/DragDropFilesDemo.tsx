import * as React from 'react';
import { Text } from '@fluentui/react';

import {
  DragDropFiles
} from '@pnp/spfx-controls-react/lib/DragDropFiles';

import { IDragDropFilesDemoProps } from './IDragDropFilesDemoProps';

export const DragDropFilesDemo: React.FC<IDragDropFilesDemoProps> = () => {



  const _getDropFiles = (files:any) => {
    for (let i = 0; i < files.length; i++) {
      console.log("Filename: " + files[i].name);
      console.log("Path: " + files[i].fullPath);
    }
  }

  return (
     <DragDropFiles 
          dropEffect="copy" 
          enable={true}  
          onDrop={_getDropFiles}
          iconName="Upload"
          labelMessage= "My custom upload File"
          
          >
          Drag and drop here...

          </DragDropFiles>
  );
};

export default DragDropFilesDemo;