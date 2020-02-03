import { Request, Response } from 'express';

import { Clients, Policies } from '../../storage';

export const FilterUsersRouteHandler = (req: Request, res: Response) => {
    const params = req.query;
    console.log(params);

    if (params.userIds) {
        const ids = params.userIds.split(',') as string[];
        const data = Clients.filter(client => ids.indexOf(client.id) > -1);
        return res.json(data);
    }

    if (params.usernames) {
        const names = params.usernames.split(',') as string[];
        const data = Clients.filter(client => names.indexOf(client.name) > -1);
        return res.json(data);
    }

    res.json(Clients);
};

export const GetUserByPolicyNumberRouteHandler = (req: Request, res: Response) => {
    const policyNumber = req.params.policyNumber;
    console.log(policyNumber);

    if (!req.params.policyNumber) return res.json([]);

    const policy = Policies.find(policy => policy.id === policyNumber);
    if (!policy) return res.json([]);

    res.json(Clients.find(client => client.id === policy.clientId));
};
