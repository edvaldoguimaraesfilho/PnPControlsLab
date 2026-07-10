import * as React from 'react';

export interface IPropertyPaneCheckboxProps {
  showTitle: boolean;
}

const PropertyPaneCheckboxCtr: React.FC<IPropertyPaneCheckboxProps> = (props) => {
  return (
      
      
      <div>
      {props.showTitle &&(<h1>Property Pane Checkbox</h1>)}

    <p>showTitle: {props.showTitle.toString()}</p>
  </div>
  );
}
export default PropertyPaneCheckboxCtr;