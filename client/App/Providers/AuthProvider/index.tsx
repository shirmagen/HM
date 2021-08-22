import React, { createContext, FC, useContext, useEffect, useState } from 'react';

import useUserApi from '../../hooks/api/user.hook';
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setLocalStorage,
} from '../../resolvers/localStorage.resolver';

type AuthContextProps = {
  user: User | null
  getToken: () => string | null
  updateUser: (user: User) => void
  ensureAuthorized: () => string | User | null,
  setAuth: (token: string, newUser: User) => void
  setLoggedOut: () => void
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: FC = ({children}) => {
  const [user, setUser] = useState<User | null>(null);
  const { getMyself } = useUserApi();

  const setAuth = async (token: string, newUser: User) => {
    if (token) {
      setLocalStorage('token', token);
      setUser(newUser);
    }
  };

  const setLoggedOut = () => {
    setUser(null);
    removeFromLocalStorage('token');
  };

  const getToken = () => getFromLocalStorage('token');
  const ensureAuthorized = () => getToken() || user;

  const updateUser = (user: User) => {
    setUser({ ...user });
  };

  useEffect(() => {
    const resolveUser = async () => {
      const localToken = getToken();

      if (localToken) {
        const user = await getMyself();

        setUser(user);
      }
    };

    resolveUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        getToken,
        updateUser,
        ensureAuthorized,
        setAuth,
        setLoggedOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
