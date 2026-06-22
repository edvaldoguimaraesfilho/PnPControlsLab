import * as React from 'react';
import { ListView, IViewField, SelectionMode, GroupOrder, IGrouping } from "@pnp/spfx-controls-react/lib/ListView";
import ECB from './ECB';
import { IECBProps } from './IECBProps';
import SpPnPbasicListViewContextMenuWebPart from '../SpPnPbasicListViewContextMenuWebPart';
import { ISpPnPbasicListViewContextMenuProps } from './ISpPnPbasicListViewContextMenuProps';

 
interface IListitem {
  id: number;
  displayName: string;
  email: string;
  managers: { displayName: string }[];
} 


const SpPnPbasicListViewContextMenu: React.FC<ISpPnPbasicListViewContextMenuProps> = ({context}) => {
  
  const items = [
    {
      id: 1,
      displayName: 'Adele Vance',
      email: 'adelev@contoso.onmicrosoft.com',
      managers: [{displayName: "Tony Stark"}, {displayName: "Natasha Romanoff"}]
    },
    {
      id: 2,
      displayName: 'Alex Wilber',
      email: 'alexw@contoso.onmicrosoft.com',
      managers: [{displayName: "Maria Hill"}, {displayName: "Bruce Banner"}]
    },
    {
      id: 3,
      displayName: 'Megan Bowen',
      email: 'meganb@contoso.onmicrosoft.com',
      managers: [{displayName: "Thor"}, {displayName: "Tony Stark"}]
    },
  ];


  
  const vwFields: IViewField[] = [
    {
      name: "id",
      displayName: "ID",
      sorting: false,
      minWidth: 50,
      maxWidth: 50
    },
    {
      name: "displayName",
      displayName: "Name",
      sorting: true,
      minWidth: 100,
      maxWidth: 100,
      render: (rowitem: any) => {
    const element:React.ReactElement<IECBProps> = React.createElement(
      ECB, 
      {
        item: rowitem
      }
    );
    return element;
  }      
    },
    {
      name: "email",
      displayName: "E-mail",
      sorting: true,
      minWidth: 150,
      maxWidth: 150
    },
    {
      name: "managers",
      displayName: "Managers",
      sorting: true,
      render: (item?: any, index?: number, column?: any): JSX.Element => {
        return (
          <div style={{display: 'flex', columnGap: '10px'}}>
            {item.managers.map((itm: any) => {return <span>{itm.displayName}</span>})}
          </div>
        );
      },
      minWidth: 100,
      maxWidth: 100
    }
  ];
  
  
  return (
   <div>
     <ListView items={items}
      viewFields={vwFields}
      compact={true}
      selectionMode={SelectionMode.single}
      showFilter={true}
      dragDropFiles={true}
      stickyHeader={true}
      flattenItems={false}
    />
   </div>
  );
};

export default SpPnPbasicListViewContextMenu;