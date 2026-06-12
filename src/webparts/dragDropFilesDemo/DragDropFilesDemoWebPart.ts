import * as React from 'react';
import * as ReactDom from 'react-dom';

import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import {
  BaseClientSideWebPart
} from '@microsoft/sp-webpart-base';

import { Version } from '@microsoft/sp-core-library';

import DragDropFilesDemo
  from './components/DragDropFilesDemo';

import {
  IDragDropFilesDemoProps
} from './components/IDragDropFilesDemoProps';

export interface IDragDropFilesDemoWebPartProps {
  description: string;
}

export default class DragDropFilesDemoWebPart
  extends BaseClientSideWebPart<IDragDropFilesDemoWebPartProps> {

  public render(): void {

    const element: React.ReactElement<IDragDropFilesDemoProps> =
      React.createElement(
        DragDropFilesDemo,
        {
          description: this.properties.description
        }
      );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration():
    IPropertyPaneConfiguration {

    return {
      pages: [
        {
          header: {
            description: 'DragDropFiles Demo'
          },
          groups: [
            {
              groupFields: [
                PropertyPaneTextField('description', {
                  label: 'Description'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}