import * as React from 'react';
import { IProgressStepsIndicatorWpProps } from './IProgressStepsIndicatorWpProps';
import { ProgressStepsIndicator } from '@pnp/spfx-controls-react/lib/ProgressStepsIndicator';
import { createTheme } from '@fluentui/react';



const progressSteps = [
  {
    title: 'Step 1',
    description: 'Planning'
  },
  {
    title: 'Step 2',
    description: 'Development'
  },
  {
    title: 'Step 3',
    description: 'Testing'
  },
  {
    title: 'Step 4',
    description: 'Deployment'
  }
];

const ProgressStepsIndicatorWp: React.FC<IProgressStepsIndicatorWpProps> = ({ themeVariant }) => {
  
  const customTheme = themeVariant
  ? {
      ...themeVariant,
      palette: {
        ...themeVariant.palette,
        themePrimary: '#107c10',
        themeDark: '#107c10',
        themeDarker: '#107c10',
        themeLight: '#107c10',
        themeLighter: '#107c10'
      },
      semanticColors: {
        ...themeVariant.semanticColors,
        primaryButtonBackground: '#107c10',
        primaryButtonBackgroundHovered: '#0b6a0b',
        primaryButtonText: '#ffffff'
      }
    }
  : undefined;
  
  
  return (
    <ProgressStepsIndicator
      steps={progressSteps}
      currentStep={0}
      themeVariant={customTheme}
    />
  );
};

export default ProgressStepsIndicatorWp;