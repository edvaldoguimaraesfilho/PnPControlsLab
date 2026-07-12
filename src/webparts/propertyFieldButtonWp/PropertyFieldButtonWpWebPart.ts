import * as React from 'react';
import * as ReactDom from 'react-dom';

import { Version } from '@microsoft/sp-core-library';

import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import {
  BaseClientSideWebPart
} from '@microsoft/sp-webpart-base';

import {
  IReadonlyTheme
} from '@microsoft/sp-component-base';

import * as strings from 'PropertyFieldButtonWpWebPartStrings';

import PropertyFieldButtonWp
  from './components/PropertyFieldButtonWp';

import {
  IPropertyFieldButtonWpProps
} from './components/IPropertyFieldButtonWpProps';

import {
  PropertyFieldButton
} from '@pnp/spfx-property-controls/lib/PropertyFieldButton';

export interface IPropertyFieldButtonWpWebPartProps {
  description: string;
  Btn:string
}

export default class PropertyFieldButtonWpWebPart
  extends BaseClientSideWebPart<IPropertyFieldButtonWpWebPartProps> {

  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = '';

  public render(): void {
    const element: React.ReactElement<IPropertyFieldButtonWpProps> =
      React.createElement(
        PropertyFieldButtonWp,
        {
          description: this.properties.description,  
          Btn:this.properties.Btn
        }
      );

    ReactDom.render(element, this.domElement);
  }

  protected onInit(): Promise<void> {
    return this._getEnvironmentMessage().then(
      (message: string): void => {
        this._environmentMessage = message;
      }
    );
  }

  private _getEnvironmentMessage(): Promise<string> {
    if (this.context.sdks.microsoftTeams) {
      return this.context.sdks.microsoftTeams.teamsJs.app
        .getContext()
        .then((context): string => {
          let environmentMessage: string = '';

          switch (context.app.host.name) {
            case 'Office':
              environmentMessage =
                this.context.isServedFromLocalhost
                  ? strings.AppLocalEnvironmentOffice
                  : strings.AppOfficeEnvironment;
              break;

            case 'Outlook':
              environmentMessage =
                this.context.isServedFromLocalhost
                  ? strings.AppLocalEnvironmentOutlook
                  : strings.AppOutlookEnvironment;
              break;

            case 'Teams':
            case 'TeamsModern':
              environmentMessage =
                this.context.isServedFromLocalhost
                  ? strings.AppLocalEnvironmentTeams
                  : strings.AppTeamsTabEnvironment;
              break;

            default:
              environmentMessage = strings.UnknownEnvironment;
          }

          return environmentMessage;
        });
    }

    return Promise.resolve(
      this.context.isServedFromLocalhost
        ? strings.AppLocalEnvironmentSharePoint
        : strings.AppSharePointEnvironment
    );
  }

  protected onThemeChanged(
    currentTheme: IReadonlyTheme | undefined
  ): void {
    if (!currentTheme) {
      return;
    }

    this._isDarkTheme = !!currentTheme.isInverted;

    const { semanticColors } = currentTheme;

    if (semanticColors) {
      this.domElement.style.setProperty(
        '--bodyText',
        semanticColors.bodyText || null
      );

      this.domElement.style.setProperty(
        '--link',
        semanticColors.link || null
      );

      this.domElement.style.setProperty(
        '--linkHovered',
        semanticColors.linkHovered || null
      );
    }
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
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),

                PropertyFieldButton('', {
                  key: 'buttonID',
                  text: 'Button',
                  disabled: false,
                  isPrimary: true,
                  isVisible: true,
                  onClick: (): void => {
                    alert('Button Clicked');
                  }
                })
              ]
            }
          ]
        }
      ]
    };
  }
}