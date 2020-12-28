import React from 'react';
import Home from '../Home';

const base = {
  layout: Home,
  authRequired: false,
};

let routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
];

routes = routes.map((route) => ({ ...base, ...route }));

export default routes;
