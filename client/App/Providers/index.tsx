import React, { FC } from 'react';
import { AuthProvider } from './AuthProvider';
import { ApolloThemeProvider } from './ThemeProvider';
import { LoadingProvider } from './LoadingProvider';
import { AlertProvider } from './AlertProvider';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

// @ts-ignore
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [rtlPlugin],
});

export const AppProviders: FC = ({ children }) => (
  <CacheProvider value={cacheRtl}>
    <ApolloThemeProvider>
      <LoadingProvider>
        <AlertProvider>
          <AuthProvider>{children}</AuthProvider>
        </AlertProvider>
      </LoadingProvider>
    </ApolloThemeProvider>
  </CacheProvider>
);
