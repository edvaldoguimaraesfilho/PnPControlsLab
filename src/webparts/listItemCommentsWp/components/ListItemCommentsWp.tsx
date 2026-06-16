import * as React from 'react';
import { ListItemComments } from '@pnp/spfx-controls-react/lib/ListItemComments';
import { WebPartContext } from '@microsoft/sp-webpart-base';

interface IListItemCommentsWpProps {
  context: WebPartContext;
}

const ListItemCommentsWp: React.FC<IListItemCommentsWpProps> = (props) => {
  return (
    <ListItemComments
      webUrl="https://contoso.sharepoint.com/sites/ThePerspective"
      listId="dfa283f4-5faf-4d54-b6b8-5bcaf2725af5"
      itemId={"1"}
      serviceScope={props.context.serviceScope as any}
      numberCommentsPerPage={10}
      label="ListItem Comments"
    />
  );
};

export default ListItemCommentsWp;