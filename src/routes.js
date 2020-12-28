import React from 'react';
import { Router, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './App';
import ResolvedRoute from './components/ResolvedRoute';
import shellRoutes from './Shell/routes';

const routes = [...shellRoutes];

export default () => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <App>
        <Switch>
          {routes.map((route) => (
            <ResolvedRoute exact key={route.name} {...route} />
          ))}
          <Redirect to={'/'} from={'*'} />
        </Switch>
      </App>
    </Router>
  );
};
