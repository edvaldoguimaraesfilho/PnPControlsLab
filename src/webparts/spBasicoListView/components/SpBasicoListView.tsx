import * as React from 'react';
import { ISpBasicoListViewProps } from './ISpBasicoListViewProps';
import {getSP} from "../../commom/pnpjsConfig"

import { useEffect, useState } from "react";

import {
  ListView,
  IViewField,
  SelectionMode
} from "@pnp/spfx-controls-react/lib/ListView";

interface IListItem {
  Id: number;
  Title: string;
  Modified: string;
  Created: string;
}




const SpBasicoListView: React.FC<ISpBasicoListViewProps> = (props) => {  
 
  const [items, setItems] = useState<IListItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

   const loadItems = async (): Promise<void> => {
    try {
      const sp = getSP(props.context);

      const result: IListItem[] = await sp.web.lists
        .getByTitle("Documents")
        .items
        .select("Id", "Title", "Created", "Modified")
        .orderBy("Modified", false)
        .top(20)();

      setItems(result);
    } catch (error) {
      console.error("Error loading SharePoint list items:", error);
    } finally {
      setLoading(false);
    }
  };

 
  const viewFields: IViewField[] = [
    {
      name: "Id",
      displayName: "ID",
      sorting: true,
      minWidth: 50,
      maxWidth: 80
    },
    {
      name: "Title",
      displayName: "Title",
      sorting: true,
      minWidth: 150
    },
    {
      name: "Created",
      displayName: "Created",
      sorting: true,
      minWidth: 150
    },
    {
      name: "Modified",
      displayName: "Modified",
      sorting: true,
      minWidth: 150
    }
  ];



 
  const onSelectionChanged = (selectedItems: any[]): void => {
    console.log("Selected items:", selectedItems);
  };

  if (loading) {
    return <div>Loading items...</div>;
  }
 
  return (
   <div>
      <h2>SharePoint List Items</h2>

      <ListView
        items={items}
        viewFields={viewFields}
        compact={true}
        showFilter={true}
        filterPlaceHolder="Search items..."
        selectionMode={SelectionMode.single}
        selection={onSelectionChanged}
        stickyHeader={true}
      />
    </div>
  );
};

export default SpBasicoListView;