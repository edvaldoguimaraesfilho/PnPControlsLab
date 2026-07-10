import * as React from 'react';
import * as ReactDom from 'react-dom';

import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';

import * as strings from 'PropertyFieldBrandFontPickerWpWebPartStrings';

import PropertyFieldBrandFontPickerWp
  from './components/PropertyFieldBrandFontPickerWp';

import {
  IPropertyFieldBrandFontPickerWpProps
} from './components/IPropertyFieldBrandFontPickerWpProps';

import {
  PropertyFieldBrandFontPicker,
  IBrandFontToken
} from '@pnp/spfx-property-controls/lib/PropertyFieldBrandFontPicker';

export interface IPropertyFieldBrandFontPickerWpWebPartProps {
  description: string;
  brandFont: string;
}

const customFontTokens: IBrandFontToken[] = [
  {
    name: 'corporateHeading',
    displayName: 'Corporate Heading Font',
    value: '"Montserrat", sans-serif',
    category: 'site'
  },
  {
    name: 'corporateBody',
    displayName: 'Corporate Body Font',
    value: '"Open Sans", sans-serif',
    category: 'site'
  },

  {
    name: 'Ed',
    displayName: 'Ed Font',
    value: '"Arial", sans-serif',
    category: 'site'
  }
];

export default class PropertyFieldBrandFontPickerWpWebPart
  extends BaseClientSideWebPart<IPropertyFieldBrandFontPickerWpWebPartProps> {

  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = '';

  protected async onInit(): Promise<void> {
    await super.onInit();

    if (!this.properties.brandFont) {
      this.properties.brandFont = '"Montserrat", sans-serif';
    }

    this._environmentMessage =
      await this._getEnvironmentMessage();
  }

  public render(): void {
    const element: React.ReactElement<IPropertyFieldBrandFontPickerWpProps> =
      React.createElement(
        PropertyFieldBrandFontPickerWp,
        {
          description: this.properties.description,
          brandFont: this.properties.brandFont
        }
      );

    ReactDom.render(element, this.domElement);
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

                PropertyFieldBrandFontPicker('brandFont', {
                  label: 'Custom Brand Font',

                  initialValue:
                    this.properties.brandFont,

                  onPropertyChange:
                    this.onPropertyPaneFieldChanged,

                  properties:
                    this.properties,

                  context:
                    this.context,

                  customFontTokens:
                    customFontTokens,

                  showPreview:
                    true,

                  key:
                    'brandFontFieldId'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}