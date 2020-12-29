import React from 'react';
import { Route } from 'react-router';

export default ({ component: Component, authRequired, ...rest }) => {
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};
