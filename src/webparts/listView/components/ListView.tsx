import * as React from 'react';
import { ListView, IViewField, SelectionMode } from "@pnp/spfx-controls-react/lib/ListView";
import { initializeIcons } from '@fluentui/react/lib/Icons';

initializeIcons();

const items: any[] = [
  {
    ID: 1,
    Title: "Root",
    Description: "This is a sub label",
    FileRef: "Folder"
  },
  {
    ID: 2,
    Title: "Parent 1",
    Description: "First parent item",
    FileRef: "Document"
  },
  {
    ID: 3,
    Title: "Child 1",
    Description: "Child item example",
    FileRef: "Page"
  },
  {
    ID: 4,
    Title: "Child 2",
    Description: "Another child item",
    FileRef: "Document"
  },
  {
    ID: 5,
    Title: "Parent 2",
    Description: "Second parent",
    FileRef: "Folder"
  },
  {
    ID: 6,
    Title: "John Doe",
    Description: "Used for filter example",
    FileRef: "Contact"
  }
];

const viewFields: IViewField[] = [
  {
    name: "Title",
    displayName: "Title",
    sorting: true
  },
  {
    name: "Description",
    displayName: "Description",
    sorting: false
  }
];

const ListViewWP: React.FC = () => {

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

export default ListViewWP;