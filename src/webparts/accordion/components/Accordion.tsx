import * as React from 'react';
import { Accordion } from '@pnp/spfx-controls-react/lib/Accordion';
import { IAccordionDemoProps } from './IAccordionProps';

const AccordionDemo: React.FC<IAccordionDemoProps> = () => {

  const sampleItems = [
    {
      Question: 'What is SPFx?',
      Response: 'SharePoint Framework is the development model for Microsoft 365.',
      Language: 'English'
    },
    {
      Question: 'What is PnP Controls?',
      Response: 'A collection of reusable React controls for SPFx.',
      Language: 'English'
    },
    {
      Question: 'What is Accordion?',
      Response: 'A UI component used to expand and collapse content.',
      Language: 'English'
    }
  ];

  return (
    <>
      {sampleItems.map((item, index) => (
        <Accordion
          title={item.Question}
          defaultCollapsed={true}
          className={'itemCell'}
          key={index}
        >
          <div className={'itemContent'}>
            <div>{item.Response}</div>
            <div>{`Language: ${item.Language}`}</div>
          </div>
        </Accordion>
      ))}
    </>
  );
};

export default AccordionDemo;