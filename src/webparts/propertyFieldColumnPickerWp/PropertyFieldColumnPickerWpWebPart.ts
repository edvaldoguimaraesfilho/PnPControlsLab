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

import * as strings from 'PropertyFieldColumnPickerWpWebPartStrings';

import PropertyFieldColumnPickerWp
  from './components/PropertyFieldColumnPickerWp';

import {
  IPropertyFieldColumnPickerWpProps
} from './components/IPropertyFieldColumnPickerWpProps';

import {
  PropertyFieldColumnPicker,
  PropertyFieldColumnPickerOrderBy
} from '@pnp/spfx-property-controls/lib/PropertyFieldColumnPicker';

export interface IPropertyFieldColumnPickerWpWebPartProps {
  description: string;

  // SharePoint List or Library GUID
  list: string;

  // Single selected column
  column: string;

  // Multiple selected columns
  multiColumn: string[];
}

export default class PropertyFieldColumnPickerWpWebPart
  extends BaseClientSideWebPart<IPropertyFieldColumnPickerWpWebPartProps> {

  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = '';

  public render(): void {
    const element: React.ReactElement<IPropertyFieldColumnPickerWpProps> =
      React.createElement(
        PropertyFieldColumnPickerWp,
        {
          description: this.properties.description,
          isDarkTheme: this._isDarkTheme,
          environmentMessage: this._environmentMessage,
          userDisplayName: this.context.pageContext.user.displayName,

          list: this.properties.list,
          column: this.properties.column,
          multiColumn: this.properties.multiColumn || []
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

                PropertyPaneTextField('list', {
                  label: 'List or library ID',
                  description: 'Enter the GUID of a SharePoint list or library'
                }),

                PropertyFieldColumnPicker('column', {
                  label: 'Select a column',

                  /*
                   * The cast is needed because the project currently has
                   * incompatible duplicated SPFx dependencies.
                   */
                  context: this.context as any,

                  selectedColumn: this.properties.column,
                  listId: this.properties.list,
                  disabled: !this.properties.list,

                  orderBy:
                    PropertyFieldColumnPickerOrderBy.Title,

                  onPropertyChange:
                    this.onPropertyPaneFieldChanged.bind(this),

                  properties: this.properties,

                  deferredValidationTime: 0,
                  key: 'columnPickerFieldId',
                  displayHiddenColumns: false,
                  multiSelect: false
                }),

                PropertyFieldColumnPicker('multiColumn', {
                  label: 'Select multiple columns',

                  context: this.context as any,

                  selectedColumn:
                    this.properties.multiColumn || [],

                  listId: this.properties.list,
                  disabled: !this.properties.list,

                  orderBy:
                    PropertyFieldColumnPickerOrderBy.Title,

                  onPropertyChange:
                    this.onPropertyPaneFieldChanged.bind(this),

                  properties: this.properties,

                  deferredValidationTime: 0,
                  key: 'multiColumnPickerFieldId',
                  displayHiddenColumns: false,
                  multiSelect: true
                })
              ]
            }
          ]
        }
      ]
    };
  }
}