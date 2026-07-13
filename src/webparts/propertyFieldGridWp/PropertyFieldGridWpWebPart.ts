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

import {
  DocumentBulletListRegular
} from '@fluentui/react-icons';

import * as strings from 'PropertyFieldGridWpWebPartStrings';

import PropertyFieldGridWp
  from './components/PropertyFieldGridWp';

import {
  IPropertyFieldGridWpProps
} from './components/IPropertyFieldGridWpProps';

import {
  PropertyFieldGrid
} from '@pnp/spfx-property-controls/lib/PropertyFieldGrid';

import {
  IItem
} from '@pnp/spfx-property-controls/lib/propertyFields/propertyFieldGrid/grid/IItem';

export interface IPropertyFieldGridWpWebPartProps {
  description: string;
  gridItems: IItem[];
}

const gridItems: IItem[] = [
  {
    key: '1',
    icon: React.createElement(DocumentBulletListRegular),
    title: 'File 1',
    description: 'This is the first document'
  },
  {
    key: '2',
    icon: React.createElement(DocumentBulletListRegular),
    title: 'File 2',
    description: 'This is the second document'
  },
  {
    key: '3',
    icon: React.createElement(DocumentBulletListRegular),
    title: 'File 3',
    description: 'This is the third document'
  },
  {
    key: '4',
    icon: React.createElement(DocumentBulletListRegular),
    title: 'File 4',
    description: 'This is the fourth document'
  }
];

export default class PropertyFieldGridWpWebPart
  extends BaseClientSideWebPart<IPropertyFieldGridWpWebPartProps> {

  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = '';

  public render(): void {
    const element: React.ReactElement<IPropertyFieldGridWpProps> =
      React.createElement(
        PropertyFieldGridWp,
        {
          description: this.properties.description,
          isDarkTheme: this._isDarkTheme,
          environmentMessage: this._environmentMessage,
          userDisplayName:
            this.context.pageContext.user.displayName,
          gridItems: this.properties.gridItems
        }
      );

    ReactDom.render(element, this.domElement);
  }

  protected onInit(): Promise<void> {
    return this._getEnvironmentMessage()
      .then((message: string) => {
        this._environmentMessage = message;

        if (!this.properties.gridItems) {
          this.properties.gridItems = [];
        }
      });
  }

  private _getEnvironmentMessage(): Promise<string> {
    if (this.context.sdks.microsoftTeams) {
      return this.context.sdks.microsoftTeams.teamsJs.app
        .getContext()
        .then(context => {
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
              environmentMessage =
                strings.UnknownEnvironment;
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

                PropertyFieldGrid(
                  'gridItems',
                  {
                    key: 'gridFieldId',

                    label: 'Grid Items',

                    items: gridItems,

                    multiSelect: true,

                    defaultSelectedItems:
                      this.properties.gridItems || [],

                    maxHeight: 500,

                    className: 'gridClass',

                    isVisible: true,

                    column1Label: 'File',

                    column2Label: 'Description',

                    onSelected: (
                      selectedItems: IItem[]
                    ): void => {

                      this.properties.gridItems =
                        selectedItems;

                      console.log(
                        'Selected grid items:',
                        selectedItems
                      );
                    }
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