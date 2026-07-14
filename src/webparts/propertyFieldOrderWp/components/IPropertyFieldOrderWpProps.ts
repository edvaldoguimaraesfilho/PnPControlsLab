import { IOrderedItem } from "../PropertyFieldOrderWpWebPart";

export interface IPropertyFieldOrderWpProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  userDisplayName: string;
 orderedItems: IOrderedItem[];
}
