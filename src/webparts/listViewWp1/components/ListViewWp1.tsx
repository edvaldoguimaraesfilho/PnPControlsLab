import * as React from 'react';
import { IListViewWp1Props } from './IListViewWp1Props';
import { ListView, IViewField, SelectionMode } from "@pnp/spfx-controls-react/lib/ListView";
import { initializeIcons } from '@fluentui/react/lib/Icons';

initializeIcons();

const items: any[] = [
  {
    ID: 1,
    Title: "John Doe",
    Description: "Developer",
    FileRef: "Contact"
  },
  {
    ID: 2,
    Title: "Jane Smith",
    Description: "Designer",
    FileRef: "Contact"
  },
  {
    ID: 3,
    Title: "Project Plan",
    Description: "Document example",
    FileRef: "Document"
  }
];

const viewFields: IViewField[] = [
  {
    name: "Title",
    displayName: "Name",
    sorting: true
  },
  {
    name: "Description",
    displayName: "Description",
    sorting: true
  }
];

const ListviewWp1: React.FC<IListViewWp1Props> = (props) => {

  const _getSelection = (selectedItems: any[]): void => {
    console.log("Selected items:", selectedItems);
  };

  return (
    <ListView
      items={items}
      viewFields={viewFields}
      iconFieldName="FileRef"
      compact={true}
      selectionMode={SelectionMode.multiple}
      selection={_getSelection}
      showFilter={true}
      defaultFilter="John"
      filterPlaceHolder="Search..."
      stickyHeader={true}
    />
  );
};

export default ListviewWp1;