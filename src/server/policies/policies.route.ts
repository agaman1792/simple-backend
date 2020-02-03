import { Request, Response } from 'express';

import { Clients, Policies } from '../../storage';

export const GetPoliciesRouteHandler = (req: Request, res: Response) => {
    const username = req.params.username;
    console.log(username);

    if (!req.params.username) return res.json([]);

    const user = Clients.find(client => client.name === username);
    if (!user) return res.json([]);

    return res.json(Policies.filter(policy => policy.clientId === user.id));
};
