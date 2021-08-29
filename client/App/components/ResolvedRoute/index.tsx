import React, { FC} from 'react';
import { Redirect, Route } from 'react-router';
import { useAuth } from '../../Providers/AuthProvider';
import { RouteProps } from 'react-router/ts4.0';

type ResolvedRouteProps = {
  authRequired?: boolean
  rest?: any[]
  component: FC<RouteProps>
}

export const ResolvedRoute = ({ component: Component, authRequired, ...rest }: ResolvedRouteProps) => {
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
