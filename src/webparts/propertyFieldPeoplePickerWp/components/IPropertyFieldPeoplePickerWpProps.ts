import { IPropertyFieldGroupOrPerson } from "@pnp/spfx-property-controls";

export interface IPropertyFieldPeoplePickerWpProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  userDisplayName: string;
  people: IPropertyFieldGroupOrPerson[];
}
