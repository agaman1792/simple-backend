import { IApiService, MakeGetRequest } from './base';

export interface IApiClient {
    id: string;
    name: string;
    email: string;
    role: string;
}

export interface IClientResponse {
    clients: IApiClient[];
}

class ClientsApiService implements IApiService {

    async get(url: string) {
        const data = await MakeGetRequest<IClientResponse>(url);
        return data.clients;
    }

}

export const clientsApiService = new ClientsApiService();
