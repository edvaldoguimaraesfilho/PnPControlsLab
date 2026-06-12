import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import AccordionDemo from './components/Accordion';

export interface IAccordionDemoWebPartProps {
}

export default class AccordionDemoWebPart
  extends BaseClientSideWebPart<IAccordionDemoWebPartProps> {

  public render(): void {

    const element: React.ReactElement = React.createElement(
      AccordionDemo,
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