import { IFilePickerResult } from "@pnp/spfx-controls-react";

export interface IPropertyFieldFilePickerWpProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  userDisplayName: string;
  filePickerResult: IFilePickerResult;
}
