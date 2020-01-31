import { IApiService, MakeGetRequest } from './base';

export interface IPolicy {
    id: string;
    name: string;
    email: string;
    role: string;
}

export interface IPolicyResponse {
    policies: IPolicy[];
}

class PoliciesApiService implements IApiService {

    async get(url: string) {
        const data = await MakeGetRequest<IPolicyResponse>(url);
        return data.policies;
    }

}

export const policiesApiService = new PoliciesApiService();
