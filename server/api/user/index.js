import { AsyncRouter } from 'express-async-router';
import objectId from 'express-param-objectid';
import { authenticate } from '../../auth';
import * as controller from './user.controller';

const router = new AsyncRouter();

router.param('id', objectId);

router.get('/', authenticate(), controller.getAll);
router.get('/me', authenticate(), controller.me);
router.get('/:username', authenticate(), controller.show);
router.put('/:id', authenticate(), controller.update);
router.delete('/:id', controller.deleteUser);
router.post('/', controller.post);

export default router;
