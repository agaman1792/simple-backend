import { Request, Response } from 'express';

import { Storage } from '../../storage';

export const FilterUsersRouteHandler = async (req: Request, res: Response) => {
    const params = req.query;
    console.log(params);

    if (params.userIds) {
        const ids = params.userIds.split(',') as string[];
        // const data = Clients.filter(client => ids.indexOf(client.id) > -1);
        const data = await Storage.filterClientsByIds(...ids);
        return res.json(data);
    }

    if (params.usernames) {
        const names = params.usernames.split(',') as string[];
        // const data = Clients.filter(client => names.indexOf(client.name) > -1);
        const data = await Storage.filterClientsByNames(...names);
        return res.json(data);
    }

    res.json(await Storage.getClients());
};

export const GetUserByPolicyNumberRouteHandler = async (req: Request, res: Response) => {
    const policyNumber = req.params.policyNumber;
    console.log(policyNumber);

    if (!req.params.policyNumber) return res.json([]);

    const client = await Storage.getClientByPolicyNumber(req.params.policyNumber);
    res.json(client);
};
