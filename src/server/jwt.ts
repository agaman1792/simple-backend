import { decode, sign, verify } from 'jsonwebtoken';

export const SECRET = 'asijdoijw09r3w0e3qwsa';
export const EXPIRES_IN = 120 * 60;

export const DecodeToken = (token: string): any => {
    return decode(token);
};

export const GenerateToken = (username: string): string => {
    return sign({ username }, SECRET, { expiresIn: EXPIRES_IN });
};

export const ValidateToken = (token: string): boolean => {
    try {
        verify(token, SECRET);
        return true;
    } catch (err) {
        return false;
    }
}
