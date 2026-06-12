import * as React from 'react';

import {
  Carousel,
  CarouselButtonsLocation,
  CarouselButtonsDisplay,
  ICarouselImageProps
} from '@pnp/spfx-controls-react/lib/Carousel';

import { ImageFit } from '@fluentui/react';
import { ICarouselDemoProps } from './ICarouselDemoProps';

export default class CarouselDemo extends React.Component<ICarouselDemoProps> {

  public render(): React.ReactElement<ICarouselDemoProps> {

    const carouselElements: ICarouselImageProps[] = [
      {
        imageSrc: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
        title: 'Slide 1',
        description: 'PnP Carousel Example',
        imageFit: ImageFit.cover
      },
      {
        imageSrc: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b',
        title: 'Slide 2',
        description: 'SPFx React Controls',
        imageFit: ImageFit.cover
      },
      {
        imageSrc: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
        title: 'Slide 3',
        description: 'Carousel Control Demo',
        imageFit: ImageFit.cover
      }
    ];

    return (
      <Carousel
        buttonsLocation={CarouselButtonsLocation.center}
        buttonsDisplay={CarouselButtonsDisplay.buttonsOnly}
        contentHeight={400}
        isInfinite={true}
        element={carouselElements}
      />
    );
  }
}