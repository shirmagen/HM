import React from 'react';
import AuthProvider from './AuthProvider';
import ThemeProvider from './ThemeProvider';
import LoadingProvider from './LoadingProvider';

export default ({ children }) => (
  <ThemeProvider>
    <LoadingProvider>
      <AuthProvider>{children}</AuthProvider>
    </LoadingProvider>
  </ThemeProvider>
);
