import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart
} from '@microsoft/sp-webpart-base';

import AccessibleAccordionDemo from './components/AccessibleAccordion';

export interface IAccessibleAccordionWebPartProps {
}

export default class AccessibleAccordionWebPart
  extends BaseClientSideWebPart<IAccessibleAccordionWebPartProps> {

  public render(): void {

    const element: React.ReactElement = React.createElement(
      AccessibleAccordionDemo,
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