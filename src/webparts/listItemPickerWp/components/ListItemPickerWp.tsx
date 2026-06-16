import * as React from 'react';
import { ListItemPicker } from '@pnp/spfx-controls-react/lib/ListItemPicker';
import { IListItemPickerWpProps } from './IListItemPickerWpProps';

const onSelectedItem = (data: { key: string; name: string }[]) => {
  for (const item of data) {
    console.log(`Item value: ${item.key}`);
    console.log(`Item text: ${item.name}`);
  }
}

const ListItempickerWp: React.FC<IListItemPickerWpProps> = ({context}) => {
  return (
   <ListItemPicker listId='ab7a0321-e395-40c5-89d5-fad2b68fc6cd'
                columnInternalName='Title'
                keyColumnInternalName='Id'
                filter="Title eq 'Air Conditioner'"
                orderBy={"Id desc"}
                itemLimit={30}
                onSelectedItem={onSelectedItem}
                context={context} />
  );
};

export default ListItempickerWp;    