import { Request, Response } from 'express';

import { Storage } from '../../storage';

export const GetPoliciesRouteHandler = async (req: Request, res: Response) => {
    const username = req.params.username;
    console.log(username);

    if (!req.params.username) return res.json([]);

    const policies = await Storage.getPoliciesByClientName(req.params.username);
    return res.json(policies);
};
