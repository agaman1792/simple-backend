import Express from 'express';

import { Clients, Policies } from '../storage';

export const Server = Express();

Server.use('/users', (req, res) => {

    res.json(Clients);
});

Server.use('/policies', (req, res) => {

    res.json(Policies);
});
