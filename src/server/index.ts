import Express from 'express';

import { PoliciesRouter } from './route.policies';
import { UserRouter } from './route.user';

export const Server = Express();

Server.use('/policies', PoliciesRouter);
Server.use('/users', UserRouter);
