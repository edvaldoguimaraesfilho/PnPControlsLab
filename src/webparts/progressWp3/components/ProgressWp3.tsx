import * as React from 'react';
import { useState } from 'react';
import { Progress, IProgressAction } from '@pnp/spfx-controls-react/lib/Progress';
import { PrimaryButton } from '@fluentui/react';

// Extends IProgressAction to also require an execute method.
// This is what lets TypeScript know our mock actions really do have execute(),
// without needing "as" casts anywhere else in the file.
interface IMockProgressAction extends IProgressAction {
  execute: () => Promise<void>;
}

// Plain function that builds an object matching IMockProgressAction.
// No class, no "this", no getters — just a function returning an object literal.
const createMockAction = (title: string, delayInMilliseconds: number): IMockProgressAction => {
  return {
    title,
    execute: (): Promise<void> => {
      return new Promise<void>((resolve) => {
        setTimeout(() => resolve(), delayInMilliseconds);
      });
    },
  };
};

const ProgressWp3: React.FC = () => {
  const mockActions: IMockProgressAction[] = [
    createMockAction('Create folder', 1000),
    createMockAction('Copy files', 1500),
    createMockAction('Set permissions', 1000),
  ];

  const [currentActionIndex, setCurrentActionIndex] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  // Sequentially executes every mocked action, advancing the index as each one finishes
  const runAllActions = async (): Promise<void> => {
    setIsRunning(true);

    for (let index = 0; index < mockActions.length; index++) {
      setCurrentActionIndex(index);
      await mockActions[index].execute();
    }

    // Push the index past the last item so everything visually shows as completed
    setCurrentActionIndex(mockActions.length);
    setIsRunning(false);
  };

  const resetSteps = (): void => {
    setCurrentActionIndex(0);
  };

  return (
    <div>
      <Progress
        title={'Progress running real (mocked) actions'}
        actions={mockActions}
        currentActionIndex={currentActionIndex}
        showOverallProgress={true}
        hideNotStartedActions={false}
      />

      <PrimaryButton text="Run" onClick={runAllActions} disabled={isRunning} style={{ marginRight: 8 }} />
      <PrimaryButton text="Reset" onClick={resetSteps} disabled={isRunning} />
    </div>
  );
};

export default ProgressWp3;