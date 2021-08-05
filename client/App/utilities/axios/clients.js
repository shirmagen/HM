import axios from 'axios';

export const authClient = {
  instance: axios.create({
    baseURL: `/auth/`,
    responseType: 'json',
  }),
  authRequired: false,
};

export const userClient = {
  instance: axios.create({
    baseURL: `/api/users/`,
    responseType: 'json',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }),
  authRequired: true,
};

export default [authClient];
