import * as React from 'react';
import { FolderPicker, IFolder } from "@pnp/spfx-controls-react/lib/FolderPicker";

import { IFolderPickerWpProps } from './IFolderPickerWpProps';

const _onFolderSelect = (folder: IFolder): void => {
  console.log('selected folder', folder);
}

const FolderPickerWp: React.FC<IFolderPickerWpProps> = (props) => {
  return (
    <div>
      <h1>Folder Picker Web Part</h1>
      <FolderPicker context={props.context}
                label='Folder Picker'
                required={true}
                rootFolder={{
                  Name: 'Documents',
                  ServerRelativeUrl: `/sites/dev/Shared Documents`
                }}                
                onSelect={_onFolderSelect}
                canCreateFolders={true} />
    </div>
  );
};

export default FolderPickerWp;  