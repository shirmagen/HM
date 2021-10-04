import {Shell} from './Shell';
import { DistributeSong } from './distribute-song/DistributeSong';
import { Calculators } from './calculators/Calculators';
import { ManageEntites } from './manage-entites/ManageEntites';
import { Users } from './users/Users';

const base = {
  layout: Shell,
  authRequired: true,
};

let routes = [
  {
    path: '/home',
    name: 'home',
    component: Shell
  },
  {
    path: '/distribute-song',
    name: 'distributeSong',
    component: DistributeSong,
  },
  {
    path: '/calculators',
    name: 'calculators',
    component: Calculators,
  },
  {
    path: '/manage-entities',
    name: 'manageEntities',
    component: ManageEntites,
  },
  {
    path: '/users',
    name: 'users',
    component: Users,
  },
];

routes = routes.map((route) => ({ ...base, ...route }));

export default routes;
