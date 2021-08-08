import { useAuth } from '../../Providers/AuthProvider';
import { generateApi } from '../../utilities/axios/generate-api';
import { authClient } from '../../utilities/axios/clients';

export default () => {
  const { instance } = authClient;
  const { get, post } = generateApi({ instance });
  const { setLoggedOut } = useAuth();
  const login = async ({ email, password }) => post({ url: '/login', body: { email, password } });
  const logout = () => {
    setLoggedOut();
  };

  return { login, logout };
};
