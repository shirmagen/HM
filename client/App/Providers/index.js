import React from 'react';
import {AuthProvider} from './AuthProvider';
import {ApolloThemeProvider} from './ThemeProvider';
import {LoadingProvider} from './LoadingProvider';
import {AlertProvider} from './AlertProvider';

export const AppProviders = ({ children }) => (
  <ApolloThemeProvider>
    <LoadingProvider>
      <AlertProvider>
        <AuthProvider>{children}</AuthProvider>
      </AlertProvider>
    </LoadingProvider>
  </ApolloThemeProvider>
);
