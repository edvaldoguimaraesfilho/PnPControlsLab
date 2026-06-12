import * as React from 'react'
import { FieldPicker  } from "@pnp/spfx-controls-react/lib/FieldPicker";
import content from '../aAtest/assets/welcome-dark.png';

interface IFieldPickerCtrProps {
    context:any;
}

const onFieldPickerChanged = (fields: any|any []) => {
  console.log("Fields:", fields);
   console.log(JSON.stringify(fields, null, 2));
};

const FieldPickerCtr:React.FC<IFieldPickerCtrProps>=({context})=>{

return(<FieldPicker
  context={context}  
  includeHidden={false}
  includeReadOnly={false}
  label="Select your field(s)"
  multiSelect={false}
  
  listId="ab7a0321-e395-40c5-89d5-fad2b68fc6cd"
  onSelectionChanged={onFieldPickerChanged}
  showBlankOption={true}
/>)



}


export default FieldPickerCtr;