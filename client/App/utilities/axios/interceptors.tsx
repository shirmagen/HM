import React, { FC, useEffect } from 'react';
import {
  generalizeError,
  getErrorMessage,
  getErrorStatus,
  UNAUTHORIZED_STATUSES
} from '../../resolvers/error.resolver';
import { useAuth } from '../../Providers/AuthProvider';
import clients from './clients';
import { AxiosError, AxiosInstance } from 'axios';

export const AxiosWrapper: FC = ({ children }) => {
  const { setLoggedOut, getToken } = useAuth();

  const errorHandler = (error: AxiosError) => {
  const status = getErrorStatus(error);

    if (UNAUTHORIZED_STATUSES.includes(status)) {
      error = generalizeError(error);
      setLoggedOut();
    }

    error = getErrorMessage(error);

    throw error;
  };

  const authErrorHandler = (error: AxiosError) => {
    error = getErrorMessage(error);

    throw error;
  };

  const setAuthInterceptor = (instance: AxiosInstance) =>
    instance.interceptors.response.use(response => response, authErrorHandler);
  const setApiInterceptor = (instance: AxiosInstance) => {
    instance.interceptors.response.use(response => response, errorHandler);
    instance.interceptors.request.use(config => ({
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${getToken()}`
      }
    }));
  };

  const initialize = () =>
    clients.map(({ instance, authRequired }) => {
      const setInstanceInterceptor = authRequired ? setApiInterceptor : setAuthInterceptor;

      return setInstanceInterceptor( instance);
    });

  useEffect(() => {
    initialize();
  }, []);

  return <>{children}</>;
};
