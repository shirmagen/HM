import React, { FC } from 'react';
import { Layout } from 'mui-flex-layout';
import { useTheme } from '../../Providers/ThemeProvider';

export const ApolloLayout: FC = ({ children }) => {
  const { palette: { background: { default: defaultBackground } } } = useTheme();

  return <Layout color={defaultBackground}>{children}</Layout>;
};
