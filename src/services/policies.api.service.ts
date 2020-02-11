import { IApiService, MakeGetRequest } from './base';

export interface IApiPolicy {
    id: string;
    amountInsured: number;
    email: string;
    inceptionDate: string;
    installmentPayment: boolean;
    clientId: string;
}

export interface IPolicyResponse {
    policies: IApiPolicy[];
}

class PoliciesApiService implements IApiService {

    async get(url: string) {
        const data = await MakeGetRequest<IPolicyResponse>(url);
        return data.policies;
    }

}

export const policiesApiService = new PoliciesApiService();
