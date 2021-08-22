import { generateApi } from '../../utilities/axios/generate-api';
import { userClient } from '../../utilities/axios/clients';

export default () => {
  const { instance } = userClient;
  const { get, post } = generateApi(instance);

  const getMyself = async () => get('/me');
  const getUserByEmail = async (email: string) => get(`/email/${email}`);
  const getUser = async (username: string) => get(`/${username}`);

  return { getMyself, getUserByEmail, getUser };
};
