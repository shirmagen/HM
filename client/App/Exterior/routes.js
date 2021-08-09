import React from 'react';
import Landing from './Landing/Landing';
import Login from './Login/Login';
import Exterior from '.';

const base = {
  layout: Exterior,
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
