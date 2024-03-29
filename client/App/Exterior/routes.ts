import {Landing} from './Landing';
import {Login} from './Login';
import {Exterior} from '.';

const base = {
  layout: Exterior,
  authRequired: false,
};

export default [
  {
    path: '/',
    name: 'landing',
    exact: true,
    component: Landing,
    ...base,
  },
  {
    path: '/login',
    name: 'login',
    exact: true,
    component: Login,
    ...base,
  },
];
