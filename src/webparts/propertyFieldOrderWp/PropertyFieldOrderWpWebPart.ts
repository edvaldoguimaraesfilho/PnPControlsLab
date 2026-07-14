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

import * as strings from 'PropertyFieldOrderWpWebPartStrings';

import PropertyFieldOrderWp
  from './components/PropertyFieldOrderWp';

import {
  IPropertyFieldOrderWpProps
} from './components/IPropertyFieldOrderWpProps';

import {
  PropertyFieldOrder
} from '@pnp/spfx-property-controls/lib/PropertyFieldOrder';

import {
  orderedItem
} from './components/orderedItem';

export interface IOrderedItem {
  text: string;
  iconName: string;
}

export interface IPropertyFieldOrderWpWebPartProps {
  description: string;
  orderedItems: IOrderedItem[];
}

export default class PropertyFieldOrderWpWebPart
  extends BaseClientSideWebPart<IPropertyFieldOrderWpWebPartProps> {

  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = '';

  public render(): void {
    const element: React.ReactElement<IPropertyFieldOrderWpProps> =
      React.createElement(
        PropertyFieldOrderWp,
        {
          description: this.properties.description,
          isDarkTheme: this._isDarkTheme,
          environmentMessage: this._environmentMessage,
          userDisplayName:
            this.context.pageContext.user.displayName,
          orderedItems:
            this.properties.orderedItems || []
        }
      );

    ReactDom.render(
      element,
      this.domElement
    );
  }

  protected async onInit(): Promise<void> {
    await super.onInit();

    if (
      !this.properties.orderedItems ||
      this.properties.orderedItems.length === 0
    ) {
      this.properties.orderedItems = [
        {
          text: 'Cat',
          iconName: 'Cat'
        },
        {
          text: 'Pig',
          iconName: 'Savings'
        },
        {
          text: 'Human',
          iconName: 'Running'
        },
        {
          text: 'Robot',
          iconName: 'Robot'
        },
        {
          text: 'Dog',
          iconName: 'FangBody'
        }
      ];
    }

    this._environmentMessage =
      await this._getEnvironmentMessage();

    this.context.propertyPane.refresh();
  }

  private _getEnvironmentMessage(): Promise<string> {
    if (this.context.sdks.microsoftTeams) {
      return this.context.sdks.microsoftTeams.teamsJs.app
        .getContext()
        .then(context => {
          switch (context.app.host.name) {
            case 'Office':
              return this.context.isServedFromLocalhost
                ? strings.AppLocalEnvironmentOffice
                : strings.AppOfficeEnvironment;

            case 'Outlook':
              return this.context.isServedFromLocalhost
                ? strings.AppLocalEnvironmentOutlook
                : strings.AppOutlookEnvironment;

            case 'Teams':
            case 'TeamsModern':
              return this.context.isServedFromLocalhost
                ? strings.AppLocalEnvironmentTeams
                : strings.AppTeamsTabEnvironment;

            default:
              return strings.UnknownEnvironment;
          }
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

    this._isDarkTheme =
      !!currentTheme.isInverted;

    const {
      semanticColors
    } = currentTheme;

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
    ReactDom.unmountComponentAtNode(
      this.domElement
    );
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
            description:
              strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName:
                strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField(
                  'description',
                  {
                    label:
                      strings.DescriptionFieldLabel
                  }
                ),

                PropertyFieldOrder(
                  'orderedItems',
                  {
                    key: 'orderedItems',
                    label: 'Ordered Items',
                    items:
                      this.properties.orderedItems || [],
                    textProperty: 'text',
                    onRenderItem: orderedItem,
                    properties: this.properties,
                    onPropertyChange:
                      this.onPropertyPaneFieldChanged
                  }
                )
              ]
            }
          ]
        }
      ]
    };
  }
}