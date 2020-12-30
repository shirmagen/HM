import React from 'react';
import { Redirect, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ResolvedRoute from './components/ResolvedRoute';
import shellRoutes from './Shell/routes';

const routes = [...shellRoutes];

export default () => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Switch>
        {routes.map((route) => (
          <ResolvedRoute exact key={route.name} {...route} />
        ))}
        <Redirect to={'/'} from={'*'} />
      </Switch>
    </Router>
  );
};
