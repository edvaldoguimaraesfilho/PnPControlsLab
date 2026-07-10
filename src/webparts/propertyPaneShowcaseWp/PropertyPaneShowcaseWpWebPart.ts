import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';

import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';

import * as strings from 'PropertyPaneShowcaseWpWebPartStrings';
import PropertyPaneShowcaseWp from './components/PropertyPaneShowcaseWp';
import { IPropertyPaneShowcaseWpProps } from './components/IPropertyPaneShowcaseWpProps';

import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneCheckbox,
  PropertyPaneToggle,
  PropertyPaneDropdown,
  PropertyPaneChoiceGroup,
  PropertyPaneSlider,
  PropertyPaneButton,
  PropertyPaneButtonType,
  PropertyPaneLabel,
  PropertyPaneLink,
  PropertyPaneHorizontalRule
} from '@microsoft/sp-property-pane';

export interface IPropertyPaneShowcaseWpWebPartProps {
 title: string;
  description: string;
  showTitle: boolean;
  enableFeature: boolean;
  selectedColor: string;
  selectedTheme: string;
  maxItems: number;
}

export default class PropertyPaneShowcaseWpWebPart extends BaseClientSideWebPart<IPropertyPaneShowcaseWpWebPartProps> {

  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = '';

  private _resetSettings(): void {
  this.properties.title = 'Native Property Pane Showcase';
  this.properties.description = 'Example using native SPFx Property Pane controls.';
  this.properties.showTitle = true;
  this.properties.enableFeature = true;
  this.properties.selectedColor = 'blue';
  this.properties.selectedTheme = 'light';
  this.properties.maxItems = 10;

  this.render();
  this.context.propertyPane.refresh();
}

  public render(): void {
    const element: React.ReactElement<IPropertyPaneShowcaseWpProps> = React.createElement(
      PropertyPaneShowcaseWp,
      {
         title: this.properties.title,
      description: this.properties.description,
      showTitle: this.properties.showTitle,
      enableFeature: this.properties.enableFeature,
      selectedColor: this.properties.selectedColor,
      selectedTheme: this.properties.selectedTheme,
      maxItems: this.properties.maxItems
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onInit(): Promise<void> {
    this.properties.title ??= 'Native Property Pane Showcase';
  this.properties.description ??= 'Example using native SPFx Property Pane controls.';
  this.properties.showTitle ??= true;
  this.properties.enableFeature ??= true;
  this.properties.selectedColor ??= 'blue';
  this.properties.selectedTheme ??= 'light';
  this.properties.maxItems ??= 10;
   
   
    return this._getEnvironmentMessage().then(message => {
      this._environmentMessage = message;
    });
  }



  private _getEnvironmentMessage(): Promise<string> {
    if (!!this.context.sdks.microsoftTeams) { // running in Teams, office.com or Outlook
      return this.context.sdks.microsoftTeams.teamsJs.app.getContext()
        .then(context => {
          let environmentMessage: string = '';
          switch (context.app.host.name) {
            case 'Office': // running in Office
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOffice : strings.AppOfficeEnvironment;
              break;
            case 'Outlook': // running in Outlook
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOutlook : strings.AppOutlookEnvironment;
              break;
            case 'Teams': // running in Teams
            case 'TeamsModern':
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
              break;
            default:
              environmentMessage = strings.UnknownEnvironment;
          }

          return environmentMessage;
        });
    }

    return Promise.resolve(this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment);
  }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    this._isDarkTheme = !!currentTheme.isInverted;
    const {
      semanticColors
    } = currentTheme;

    if (semanticColors) {
      this.domElement.style.setProperty('--bodyText', semanticColors.bodyText || null);
      this.domElement.style.setProperty('--link', semanticColors.link || null);
      this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered || null);
    }

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
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [

  PropertyPaneLabel('generalLabel', {
    text: 'General Settings'
  }),

  PropertyPaneTextField('title', {
    label: 'Title'
  }),

  PropertyPaneTextField('description', {
    label: 'Description',
    multiline: true,
    rows: 5
  }),

  PropertyPaneHorizontalRule(),

  PropertyPaneLabel('displayLabel', {
    text: 'Display Settings'
  }),

  PropertyPaneCheckbox('showTitle', {
    text: 'Show Title'
  }),

  PropertyPaneToggle('enableFeature', {
    label: 'Enable Feature',
    onText: 'Enabled',
    offText: 'Disabled'
  }),

  PropertyPaneDropdown('selectedColor', {
    label: 'Color',
    options: [
      { key: 'red', text: 'Red' },
      { key: 'green', text: 'Green' },
      { key: 'blue', text: 'Blue' }
    ]
  }),

  PropertyPaneChoiceGroup('selectedTheme', {
    label: 'Theme',
    options: [
      { key: 'light', text: 'Light' },
      { key: 'dark', text: 'Dark' },
      { key: 'auto', text: 'Auto' }
    ]
  }),

  PropertyPaneSlider('maxItems', {
    label: 'Maximum Items',
    min: 1,
    max: 20,
    step: 1,
    showValue: true
  }),

  PropertyPaneHorizontalRule(),

  PropertyPaneLabel('helpLabel', {
    text: 'Help and Documentation'
  }),

  PropertyPaneLink('documentationLink', {
    text: 'Open SPFx Documentation',
    href: 'https://learn.microsoft.com/sharepoint/dev/spfx/',
    target: '_blank'
  }),

  PropertyPaneHorizontalRule(),

  PropertyPaneButton('resetButton', {
    text: 'Reset Settings',
    buttonType: PropertyPaneButtonType.Primary,
    onClick: this._resetSettings.bind(this)
  })

]
        }
      ]
    }
  ]
};
  }
}
