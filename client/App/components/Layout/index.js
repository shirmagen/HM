import React from 'react';
import { Layout } from 'mui-flex-layout';
import { useTheme } from '../../Providers/ThemeProvider';

export const ApolloLayout = ({ children }) => {
  const {
    theme: {
      background: { default: defaultBackground }
    }
  } = useTheme();

  return <Layout color={defaultBackground}>{children}</Layout>;
};
