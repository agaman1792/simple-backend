import { Request, Response } from 'express';
import { DecodeToken } from './jwt';

import { Storage } from '../storage';

export const UseAuthorization = (...roles: string[]) => async (req: Request, res: Response, next: () => void) => {
    if (roles.length === 0)
        return next();

    const token = req.headers.authorization || '';
    const { username } = DecodeToken(token);

    const { role } = await Storage.getClientByName(username);
    console.log(roles, role);
    if (roles.indexOf(role) === -1)
        return res.status(400).json({ error: 'Unauthorized' });

    next();
};
