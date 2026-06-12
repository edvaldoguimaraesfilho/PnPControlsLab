import * as React from 'react';
import { EnhancedThemeProvider, getDefaultTheme, useTheme, ThemeContext } from "@pnp/spfx-controls-react/lib/EnhancedThemeProvider";

import { DefaultButton } from "@fluentui/react/lib/Button";

const ETP: React.FC = () => {
  const theme = useTheme();
  return (
     <DefaultButton theme={theme}>Example Child Control</DefaultButton>
  );
}

export default ETP;