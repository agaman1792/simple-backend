import { MakeApiRequest } from "./base/api.service";

export interface IClient {
    id: string;
    name: string;
    email: string;
    role: string;
}

export interface IClientResponse {
    clients: IClient[];
}

export const GetClients = async (url: string): Promise<IClientResponse> => MakeApiRequest<IClientResponse>(url);
