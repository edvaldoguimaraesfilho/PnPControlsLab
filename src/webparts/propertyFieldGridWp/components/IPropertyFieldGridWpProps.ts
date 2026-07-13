import {
  IItem
} from '@pnp/spfx-property-controls/lib/propertyFields/propertyFieldGrid/grid/IItem';

export interface IPropertyFieldGridWpProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  userDisplayName: string;
   gridItems: IItem[];
}
