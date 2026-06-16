import * as React from 'react';
import { ListPicker } from "@pnp/spfx-controls-react/lib/ListPicker";
import { IListPickerWpProps } from './IListPickerWpProps';

const onListPickerChange = (lists: string[]): void => {
  console.log("Lists:", lists);
};

const ListPickerWp: React.FC<IListPickerWpProps> = (props) => {
  return (
    <ListPicker
      context={props.context}
      label="Select your list(s)"
      placeHolder="Select your list(s)"
      baseTemplate={100}
      contentTypeId={undefined}
      includeHidden={false}
      multiSelect={false}
      onSelectionChanged={()=>{onListPickerChange}}
    />
  );
};

export default ListPickerWp;