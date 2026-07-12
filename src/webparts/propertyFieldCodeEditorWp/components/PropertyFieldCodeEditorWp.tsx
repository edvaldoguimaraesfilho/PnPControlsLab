import * as React from 'react';
import { IPropertyFieldCodeEditorWpProps } from './IPropertyFieldCodeEditorWpProps';

const PropertyFieldCodeEditorWp: React.FC<IPropertyFieldCodeEditorWpProps> = (props) => {
  return (
    <div><h1>Welcome to PropertyFieldCodeEditorWp!</h1>
    <p>{props.description}</p>
    <pre>{props.htmlCode}</pre>
    </div> 
  );
};

export default PropertyFieldCodeEditorWp; 