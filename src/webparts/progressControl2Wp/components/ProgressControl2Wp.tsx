import * as React from 'react';  
import { useState } from 'react';
import { Progress, IProgressAction } from '@pnp/spfx-controls-react/lib/Progress';
import { PrimaryButton } from '@fluentui/react'; 

const ProgressControl2Wp: React.FC = () => {
  // MOCKED data: same fixed list of steps as Part 1
  const mockActions: IProgressAction[] = [
    { title: 'Create folder' } as IProgressAction,
    { title: 'Copy files' } as IProgressAction,
    { title: 'Set permissions' } as IProgressAction,
  ];
  // NEW: currentActionIndex is now state, not a hardcoded value
  const [currentActionIndex, setCurrentActionIndex] = useState<number>(0);
  // Advances the "cursor" by one step, but never past the last action
  const goToNextStep = (): void => {
    setCurrentActionIndex((previousIndex) => {
      const isLastStep = previousIndex >= mockActions.length - 1;
      return isLastStep ? previousIndex : previousIndex + 1;
    });
  };
  // Resets the sequence back to the beginning
  const resetSteps = (): void => {
    setCurrentActionIndex(0);
  };
  return (
    <div>
      <Progress
        title={'Progress with manual state'}
        actions={mockActions}
        currentActionIndex={currentActionIndex}
        showOverallProgress={true}
        hideNotStartedActions={false}
      />
      <PrimaryButton text="Next step" onClick={goToNextStep} style={{ marginRight: 8 }} />
      <PrimaryButton text="Reset" onClick={resetSteps} />
    </div>
  );
};
export default ProgressControl2Wp;