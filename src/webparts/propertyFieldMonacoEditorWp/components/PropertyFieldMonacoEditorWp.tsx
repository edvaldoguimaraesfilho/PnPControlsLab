import * as React from 'react';
import { IPropertyFieldMonacoEditorWpProps } from './IPropertyFieldMonacoEditorWpProps';

const PropertyFieldMonacoEditorWp: React.FC <IPropertyFieldMonacoEditorWpProps> = (props) => {
  return (
    <div>
      <h1>Property Field Monaco Editor Web Part</h1>
      <p>This is a sample web part demonstrating the use of property fields with Monaco Editor.</p>
      <p>Monaco Editor Value: {props.monacoEditorValue} </p>
      <p>Description: {props.description}</p>
    </div>
  );
};

export default PropertyFieldMonacoEditorWp;  
      