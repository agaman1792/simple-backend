import { Request, Response } from 'express';

import { GenerateToken, ValidateToken } from '../jwt';

import { authenticationService } from './service';

export const AuthenticationRouteHandler = (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (!username || !password)
        return res.status(400).json({ error: 'Bad request' });

    if (!authenticationService.authenticate(username, password))
        return res.status(200).json({ success: false, error: 'Bad credentials' });

    return res.status(200).json({ success: true, token: GenerateToken(username) });
};

export const UseAuthentication = (req: Request, res: Response, next: () => void) => {
    const token = req.headers.authorization || '';

    if (!ValidateToken(token)) return res.status(200).json({ error: 'Invalid token' });

    next();
};
