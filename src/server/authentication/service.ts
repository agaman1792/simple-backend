import { Storage } from '../../storage';

interface IAuthenticationService {
    authenticate(username: string, password: string): boolean;
}

class AuthenticationService implements IAuthenticationService {

    authenticate(username: string, password: string): boolean {
        return !!Storage.getClientByName(username);
    }
}

export const authenticationService = new AuthenticationService();
