import * as React from 'react';
import * as ReactDom from 'react-dom';

import {
  BaseClientSideWebPart
} from '@microsoft/sp-webpart-base';

import DashboardDemo from './components/DashboardDemo';
import { IDashboardDemoProps } from './components/IDashboardDemoProps';

export interface IDashboardDemoWebPartProps {}

export default class DashboardDemoWebPart
  extends BaseClientSideWebPart<IDashboardDemoWebPartProps> {

  public render(): void {

    const element: React.ReactElement<IDashboardDemoProps> =
      React.createElement(DashboardDemo, {});

    ReactDom.render(element, this.domElement);
  }
}