import Home from '../Home';
import DrawToolBar from '../components/DrawToolBar';
import FlashMode from '../components/FlashMode';
import SongForm from '../components/Forms/SongForm';

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
    name: 'create-new',
    component: SongForm,
  },
];

routes = routes.map((route) => ({ ...base, ...route }));

export default routes;
