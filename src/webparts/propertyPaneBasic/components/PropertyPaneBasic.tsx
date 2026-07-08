import * as React from 'react';
import { IPropertyPaneBasicProps } from './IPropertyPaneBasicProps';

const PropertyPaneBasic: React.FC<IPropertyPaneBasicProps> = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  );
}

export default PropertyPaneBasic;