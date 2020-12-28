import React from 'react';
import Home from '../Home';

import Shell from '.';

const base = {
  layout: Shell,
  authRequired: true,
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
