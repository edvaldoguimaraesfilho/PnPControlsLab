import { IDateTimeFieldValue } from "@pnp/spfx-property-controls";

export interface IPropertyFieldDateTimePickerWpProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  userDisplayName: string;
  datetime  : IDateTimeFieldValue;
}
