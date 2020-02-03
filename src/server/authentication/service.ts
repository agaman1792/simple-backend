import { Clients } from '../../storage';


interface IAuthenticationService {
    authenticate(username: string, password: string): boolean;
}

class AuthenticationService implements IAuthenticationService {

    authenticate(username: string, password: string): boolean {
        if (Clients.findIndex(client => client.name === username) === -1)
            return false;

        return true;
    }
}

export const authenticationService = new AuthenticationService();
