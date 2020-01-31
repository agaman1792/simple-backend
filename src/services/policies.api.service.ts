import { MakeApiRequest } from "./base/api.service";

export interface IPolicy {
    id: string;
    name: string;
    email: string;
    role: string;
}

export interface IPolicyResponse {
    policies: IPolicy[];
}

export const GetPolicies = async (url: string): Promise<IPolicyResponse> => MakeApiRequest<IPolicyResponse>(url);
