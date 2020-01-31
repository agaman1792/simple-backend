import Express from 'express';

import { UseCompression, UseResponseTime } from './middleware';
import { PoliciesRouter, UserRouter } from './routes';

export const Server = Express();

UseCompression(Server);
UseResponseTime(Server);

Server.use('/policies', PoliciesRouter);
Server.use('/users', UserRouter);
