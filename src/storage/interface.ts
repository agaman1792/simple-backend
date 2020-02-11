export interface IStorage {

    connect(): Promise<boolean>;

    setClients(clients: any[]): void;
    setPolicies(policies: any[]): void;

    filterClientsByIds(...ids: string[]): Promise<any[]>;
    filterClientsByNames(...names: string[]): Promise<any[]>;
    getClientByName(name: string): Promise<any>;
    getClientByPolicyNumber(policyNumber: string): Promise<any>;
    getClients(): Promise<any[]>;

    getPoliciesByClientName(name: string): Promise<any[]>;
}
