import React from 'react';
import { Redirect, Route } from 'react-router';
import { string } from 'yup/lib/locale';
import { useAuth } from '../../Providers/AuthProvider';

export default ({ component: Component, authRequired, ...rest }) => {
  const { getToken } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        (authRequired && getToken() != null) || !authRequired ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
