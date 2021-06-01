import { AsyncRouter } from 'express-async-router';
import { login, authAdmin } from './auth.controller';
import './passport';

const router = new AsyncRouter();

router.post('/login', login);
router.post('/admin', authAdmin);

export default router;
