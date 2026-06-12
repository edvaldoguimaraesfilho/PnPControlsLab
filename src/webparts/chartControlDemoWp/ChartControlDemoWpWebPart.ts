import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration
} from '@microsoft/sp-property-pane';

import {
  BaseClientSideWebPart
} from '@microsoft/sp-webpart-base';

import * as React from 'react';
import * as ReactDom from 'react-dom';

import ChartControlDemo
  from './components/ChartControlDemoWp';

import {
  IChartControlDemoProps
} from './components/IChartControlDemoWpProps';

export default class ChartControlDemoWebPart
  extends BaseClientSideWebPart<IChartControlDemoProps> {

  public render(): void {

    const element: React.ReactElement<IChartControlDemoProps> =
      React.createElement(
        ChartControlDemo,
        {}
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
      pages: []
    };
  }
}