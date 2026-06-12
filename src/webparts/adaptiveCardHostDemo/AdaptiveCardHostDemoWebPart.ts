import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import AdaptiveCardHostDemo from './components/AdaptiveCardHostDemo';

export interface IAdaptiveCardHostDemoWebPartProps {
}

export default class AdaptiveCardHostDemoWebPart
  extends BaseClientSideWebPart<IAdaptiveCardHostDemoWebPartProps> {

  public render(): void {

    const element: React.ReactElement = React.createElement(
      AdaptiveCardHostDemo,
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
}