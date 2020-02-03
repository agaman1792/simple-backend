import { Request, Response } from 'express';
import { DecodeToken } from './jwt';

import { Clients } from '../storage';

export const UseAuthorization = (...roles: string[]) => (req: Request, res: Response, next: () => void) => {
    if (roles.length === 0)
        return next();

    const token = req.headers.authorization || '';
    const { username } = DecodeToken(token);

    const { role } = Clients.find(client => client.name === username);
    console.log(roles, role);
    if (roles.indexOf(role) === -1)
        return res.status(400).json({ error: 'Unauthorized' });

    next();
};
