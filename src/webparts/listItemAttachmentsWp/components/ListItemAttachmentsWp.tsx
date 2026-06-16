import * as React from 'react';
import { ListItemAttachments } from '@pnp/spfx-controls-react/lib/ListItemAttachments';
import { IListItemAttachmentsWpProps } from './IListItemAttachmentsWpProps';

const listItemAttachmentsWp: React.FC<IListItemAttachmentsWpProps> = ({ context }) => {
  return (
    <ListItemAttachments listId='5e30db14-c47c-4fec-938a-e14b797f3504'
                     itemId={1}
                     context={context}
                     disabled={false} />
  );
};

export default listItemAttachmentsWp;   