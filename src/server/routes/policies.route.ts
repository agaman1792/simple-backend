import Express from 'express';

import { Clients, Policies } from '../../storage';

export const PoliciesRouter = Express.Router();

PoliciesRouter.get('/:username', (req, res) => {
    const username = req.params.username;
    console.log(username);

    if (!req.params.username) return res.json([]);

    const user = Clients.find(client => client.name === username);
    if (!user) return res.json([]);

    return res.json(Policies.filter(policy => policy.clientId === user.id));
});
