import Home from '../Home';
import DrawToolBar from '../components/DrawToolBar';
import FlashMode from '../components/FlashMode';
import CreateNewSong from '../Home/CreateNewSong';

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
];

routes = routes.map((route) => ({ ...base, ...route }));

export default routes;
