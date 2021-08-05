import { generateApi } from '../../utilities/axios/generate-api';
import { userClient } from '../../utilities/axios/clients';

export default () => {
  const { instance } = userClient;
  const { get, post, put, deleteMethod } = generateApi({ instance });

  const getAll = async () => get({ url: `/` });
  const getMyself = async () => get({ url: `/me` });
  const getUserByEmail = async ({ email }) => get({ url: `/email/${email}` });
  const getUser = async ({ username }) => get({ url: `/${username}` });
  const deleteUser = async (id) => {
    deleteMethod({ url: `/${id}` });
  };
  const insertUser = async (user) => post({ url: '/', body: user });

  const updateUser = async (id, { email, name }) => put({ url: `/${id}`, body: { email, name } });
  return { getMyself, getUserByEmail, getUser, getAll, deleteUser, insertUser, updateUser };
};
