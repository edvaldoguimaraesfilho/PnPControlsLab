
import {
  IPickerTerms
} from '@pnp/spfx-property-controls/lib/PropertyFieldEnterpriseTermPicker';

export interface IPropertyFieldEnterpriseTermPickerWpProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  userDisplayName: string;
  terms: IPickerTerms;

}