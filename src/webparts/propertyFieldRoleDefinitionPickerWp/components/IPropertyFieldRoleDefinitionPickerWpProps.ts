import { IRoleDefinitionInformation } from "@pnp/spfx-property-controls";

export interface IPropertyFieldRoleDefinitionPickerWpProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  userDisplayName: string;
  searchValue: string;
  roleDefinitions: IRoleDefinitionInformation[];
}
