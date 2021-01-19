import Home from '../Home';
import DrawToolBar from '../components/DrawToolBar';
import FlashMode from '../components/FlashMode';
import CreateNewForm from '../components/CreateNew/CreateNewForm';

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
    path: '/create-new',
    name: 'create-new',
    component: CreateNewForm,
  },
];

routes = routes.map((route) => ({ ...base, ...route }));

export default routes;
