import React from 'react';
import Home from '../Home';
import Song from '../components/Forms/SongForm';
import DrawToolBar from '../components/DrawToolBar';
import LoadingScreen from '../components/LoadingScreen';

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
  {
    path: '/draw',
    name: 'draw',
    component: DrawToolBar,
  },
];

routes = routes.map((route) => ({ ...base, ...route }));

export default routes;
