import React from 'react';
import AuthProvider from './AuthProvider';
import ThemeProvider from './ThemeProvider';
import LoadingProvider from './LoadingProvider';
import AlertProvider from './AlertProvider';

export default ({ children }) => (
  <ThemeProvider>
    <LoadingProvider>
      <AlertProvider>
        <AuthProvider>{children}</AuthProvider>
      </AlertProvider>
    </LoadingProvider>
  </ThemeProvider>
);
