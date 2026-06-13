import * as React from 'react';
import { FolderExplorer, IFolder } from "@pnp/spfx-controls-react/lib/FolderExplorer";
import { IFolderExplorerWpProps } from './IFolderExplorerWpProps';

const _onFolderSelect = (folder: IFolder): void => {
  console.log('selected folder', folder);
}


const FolderExplorerWp: React.FC<IFolderExplorerWpProps> = ({context}) => {
  return (
    <FolderExplorer context={context}
                rootFolder={{
                  Name: 'Documents',
                  ServerRelativeUrl: `/sites/dev/Shared Documents`
                }}
                defaultFolder={{
                  Name: 'Documents',
                  ServerRelativeUrl: `/sites/dev/Shared Documents`
                }}
                onSelect={_onFolderSelect}
                canCreateFolders={true} />
  );
};

export default FolderExplorerWp;