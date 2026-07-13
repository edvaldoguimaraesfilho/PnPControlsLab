import * as React from 'react';
import * as ReactDom from 'react-dom';

import {
    IReadonlyTheme
} from '@microsoft/sp-component-base';

import { Version } from '@microsoft/sp-core-library';

import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import {
  BaseClientSideWebPart
} from '@microsoft/sp-webpart-base';


import * as strings
  from 'PropertyFieldEnterpriseTermPickerWpWebPartStrings';

import PropertyFieldEnterpriseTermPickerWp
  from './components/PropertyFieldEnterpriseTermPickerWp';

import {
  IPropertyFieldEnterpriseTermPickerWpProps
} from './components/IPropertyFieldEnterpriseTermPickerWpProps';

import {
  IPickerTerms,
  PropertyFieldEnterpriseTermPicker
} from '@pnp/spfx-property-controls/lib/PropertyFieldEnterpriseTermPicker';

export interface IPropertyFieldEnterpriseTermPickerWpWebPartProps {
  description: string;
  terms: IPickerTerms;
  
}

export default class PropertyFieldEnterpriseTermPickerWpWebPart
  extends BaseClientSideWebPart<
    IPropertyFieldEnterpriseTermPickerWpWebPartProps
  > {

  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = '';

  protected async onInit(): Promise<void> {
    await super.onInit();

    if (!this.properties.terms) {
      this.properties.terms = [];
    }

    this._environmentMessage =
      await this._getEnvironmentMessage();
  }

  public render(): void {
    const element:
      React.ReactElement<IPropertyFieldEnterpriseTermPickerWpProps> =
      React.createElement(
        PropertyFieldEnterpriseTermPickerWp,
        {
          description: this.properties.description,
          isDarkTheme: this._isDarkTheme,
          environmentMessage: this._environmentMessage,
          userDisplayName:
          this.context.pageContext.user.displayName,
          terms: this.properties.terms || []
         
        }
      );

    ReactDom.render(
      element,
      this.domElement
    );
  }

  private _getEnvironmentMessage(): Promise<string> {
    if (this.context.sdks.microsoftTeams) {
      return this.context.sdks.microsoftTeams.teamsJs.app
        .getContext()
        .then((context) => {
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

                PropertyFieldEnterpriseTermPicker(
                  'terms',
                  {
                    label: 'Select terms',

                    panelTitle:
                      'Select enterprise taxonomy terms',

                    initialValues:
                      this.properties.terms || [],

                    allowMultipleSelections: true,

                    excludeSystemGroup: false,

                    onPropertyChange:
                      this.onPropertyPaneFieldChanged,

                    properties:
                      this.properties,

                     context: this.context as any,

                    onGetErrorMessage:
                      undefined,

                    deferredValidationTime: 0,

                    

                    key:'propertyFieldEnterpriseTermPicker',

                    includeLabels: true
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