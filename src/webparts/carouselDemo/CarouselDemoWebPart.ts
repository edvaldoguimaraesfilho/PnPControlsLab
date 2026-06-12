import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration
} from '@microsoft/sp-property-pane';
import {
  BaseClientSideWebPart
} from '@microsoft/sp-webpart-base';

import CarouselDemo from './components/CarouselDemo';
import { ICarouselDemoProps } from './components/ICarouselDemoProps';

export interface ICarouselDemoWebPartProps {
}

export default class CarouselDemoWebPart
  extends BaseClientSideWebPart<ICarouselDemoWebPartProps> {

  public render(): void {

    const element: React.ReactElement<ICarouselDemoProps> =
      React.createElement(
        CarouselDemo,
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