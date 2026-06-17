import * as React from 'react';

import { ISpPnPbasicoProps } from './ISpPnPbasicoProps';
import { useEffect } from "react";
import { getSP } from "./pnpjsConfig";

const SpPnPbasico: React.FC<ISpPnPbasicoProps> = (props) => {
 useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    const sp: any = getSP(props.context);

    const items = await sp.web.lists
      .getByTitle("Bike Sales")
      .items();

    console.log(items);
  };




  return (
    <div>
      <h1>Welcome to SPFx with PnP Controls!</h1>
      <p>This is a basic web part using React and PnP Controls.</p>
    </div>
  );
}

export default SpPnPbasico;