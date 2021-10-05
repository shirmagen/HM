import React, { FC } from 'react';
import { useTheme } from '../../Providers/ThemeProvider';
import { Grid } from '@mui/material';

export const ApolloLayout: FC = ({ children }) => {
  const { palette: { background: { default: defaultBackground } } } = useTheme();

  return <Grid sx={{color:defaultBackground}}>{children}</Grid>;
};
