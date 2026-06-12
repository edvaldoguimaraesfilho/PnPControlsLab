import * as React from 'react'
import { FieldCollectionData, CustomCollectionFieldType } from '@pnp/spfx-controls-react/lib/FieldCollectionData';


const FC:React.FC=({})=>{

return(<FieldCollectionData 
  key={"FieldCollectionData"} 
  label={"Fields Collection"} 
  manageBtnLabel={"Manage"} onChanged={(value) => { console.log(value); }}
  panelHeader={"Manage values"}

  executeFiltering={(searchFilter: string, item: any) => {
    return item["Field2"] === +searchFilter;
  }}
  itemsPerPage={3}
  fields={[
    {id: "Field1", title:"String field", type: CustomCollectionFieldType.string, required: true},
    {id: "Field2", title:"Number field", type: CustomCollectionFieldType.number},
    {id: "Field3", title:"URL field", type: CustomCollectionFieldType.url},
    {id: "Field4", title:"Boolean field", type: CustomCollectionFieldType.boolean}
  ]}
  value={[
    { 
      "Field1": "String value", "Field2": "123", "Field3": "https://pnp.github.io/", "Field4": true
    }
  ]}
/>)


}

export default FC;