import * as React from 'react';
import { Progress, IProgressAction } from '@pnp/spfx-controls-react/lib/Progress';

const ProgressControlWp: React.FC = () => {
  
  const mockActions: IProgressAction[] = [
    { title: 'Criar pasta' } as IProgressAction,
    { title: 'Copiar arquivos' } as IProgressAction,
    { title: 'Configurar permissões' } as IProgressAction,
  ];
  
  
  return (
    
      <Progress
  title={'My first Progress'}
  actions={mockActions}
  currentActionIndex={1} // fixed: pretending we're on step 2 (index 1)
  showOverallProgress={true}
  hideNotStartedActions={false}
/>
    
  );
};

export default ProgressControlWp;