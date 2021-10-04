import React, { FC } from 'react';
import { CssBaseline } from '@material-ui/core';
import { AxiosWrapper } from './utilities/axios/interceptors';
import { AppProviders } from './Providers';
import { ApolloLayout } from './components/Layout';

export const App: FC = ({ children }) => (
  <CssBaseline>
    <AppProviders>
      <ApolloLayout>
        <AxiosWrapper>{children}</AxiosWrapper>
      </ApolloLayout>
    </AppProviders>
  </CssBaseline>
);
