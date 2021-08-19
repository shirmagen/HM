import {Home} from './Home';
import {DrawToolBar} from '../components/DrawToolBar';
import {Tabs} from '../components/Tabs';
import {CreateNewSong} from './Home/CreateNewSong';

const base = {
  layout: Home,
  authRequired: true,
};

let routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/draw',
    name: 'draw',
    component: DrawToolBar,
  },
  {
    path: '/flash',
    name: 'flash',
    component: Tabs,
  },
  {
    path: '/create-new-song',
    name: 'create-new-song',
    component: CreateNewSong,
  },
];

routes = routes.map((route) => ({ ...base, ...route }));

export default routes;
