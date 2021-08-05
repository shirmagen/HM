import Home from './Home';
import DrawToolBar from '../components/DrawToolBar';
import FlashMode from '../components/FlashMode';
import CreateNewSong from './Home/CreateNewSong';
import MangeUsers from './Home/MangeUsers';

const base = {
  layout: Home,
  authRequired: true,
};

let routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/draw',
    name: 'draw',
    component: DrawToolBar,
  },
  {
    path: '/flash',
    name: 'flash',
    component: FlashMode,
  },
  {
    path: '/create-new-song',
    name: 'create-new-song',
    component: CreateNewSong,
  },
  {
    path: '/users',
    name: 'users',
    component: MangeUsers,
  },
];

routes = routes.map((route) => ({ ...base, ...route }));

export default routes;
