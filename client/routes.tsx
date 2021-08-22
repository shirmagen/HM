import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';

import {App} from './App';
import {ResolvedRoute} from './App/components/ResolvedRoute';
import shellRoutes from './App/Shell/routes';
import exteriorRoutes from './App/Exterior/routes';
import {NotFound} from './App/components/NotFound';

const routes = [...exteriorRoutes, ...shellRoutes];

export const Router = () => {
  // why the history was needed for?
  return (
    <BrowserRouter>
      <App>
        <Switch>
          {routes.map((route) => (
            <ResolvedRoute key={route.name} authRequired={false} {...route} />
          ))}
          <Route component={NotFound} />
        </Switch>
      </App>
    </BrowserRouter>
  );
};
