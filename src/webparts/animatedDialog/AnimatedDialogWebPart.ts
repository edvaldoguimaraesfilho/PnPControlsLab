import * as React from 'react';
import * as ReactDom from 'react-dom';

import { Version } from '@microsoft/sp-core-library';

import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import AnimatedDialogDemo from './components/AnimatedDialog';
import { IAnimatedDialogProps } from './components/IAnimatedDialogProps';

export interface IAnimatedDialogWebPartProps {
  description: string;
}

export default class AnimatedDialogWebPart extends BaseClientSideWebPart<IAnimatedDialogWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IAnimatedDialogProps> = React.createElement(
      AnimatedDialogDemo,
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

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: 'WP04 - AnimatedDialog'
          },
          groups: [
            {
              groupName: 'Settings',
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