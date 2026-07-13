import { IFolder } from "@pnp/spfx-controls-react";

export interface IPropertyFieldFolderPickerWpProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  userDisplayName: string;
  folderPicker: IFolder;
}
