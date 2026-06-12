import * as React from 'react';
import { DynamicForm } from "@pnp/spfx-controls-react/lib/DynamicForm";

interface IDynamicFormExProps {

context: any;

    
}


const DynamicFormEx: React.FC<IDynamicFormExProps>= ({context})=> {

return(

<DynamicForm 
          context={context} 
          listId={"ab7a0321-e395-40c5-89d5-fad2b68fc6cd"}  
          listItemId={1}
          onCancelled={() => { console.log('Cancelled') }}
          onBeforeSubmit={async (listItem) => { return false; }}
          onSubmitError={(listItem, error) => { alert(error.message); }}
          onSubmitted={async (listItemData) => { console.log(listItemData); }}>
</DynamicForm>

)}

export default DynamicFormEx;