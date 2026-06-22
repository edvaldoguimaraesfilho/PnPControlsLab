import * as React from 'react';
import { useEffect, useState } from "react";

import { ISpPnPbasicoProps } from './ISpPnPbasicoProps';
import { getSP } from "./pnpjsConfig";

import {
  ListView,
  IViewField,
  SelectionMode
} from "@pnp/spfx-controls-react/lib/ListView";

interface IBikeSaleItem {
  Id: number;
  Title: string;
}

const SpPnPbasico: React.FC<ISpPnPbasicoProps> = (props) => {

  const [items, setItems] = useState<IBikeSaleItem[]>([]);

 

  const loadItems = async (): Promise<void> => {
    try {
      const sp = getSP(props.context);

      const listItems: IBikeSaleItem[] = await sp.web.lists
        .getByTitle("Bike Sales")
        .items
        .select("Id", "Title")();

      setItems(listItems);

    } catch (error) {
      console.error("Error loading Bike Sales items:", error);
    }
  };

   useEffect(() => {
    loadItems().then(() => {
      console.log("Items loaded successfully.");
    }).catch(error => {
      console.error("Error in loadItems:", error);
    }); 
  }, []);

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
    }
  ];

  return (
    <div>
      <h1>Bike Sales</h1>
      <p>SharePoint list data rendered with PnP ListView.</p>

      <ListView
        items={items}
        viewFields={viewFields}
        compact={false}
        selectionMode={SelectionMode.none}
        showFilter={true}
        filterPlaceHolder="Search Bike Sales..."
      />
    </div>
  );
};

export default SpPnPbasico;