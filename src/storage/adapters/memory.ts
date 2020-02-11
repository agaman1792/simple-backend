import { IStorage } from '../interface';

export class MemoryStorage implements IStorage {
    private clients: any[] = [];
    private policies: any[] = [];

    connect(): Promise<boolean> {
        return new Promise(resolve => resolve(true));
    }

    setClients(clients: any[]): void {
        this.clients = clients;
    }
    setPolicies(policies: any[]): void {
        this.policies = policies;
    }

    filterClientsByIds(...ids: string[]): Promise<any[]> {
        return new Promise((resolve => resolve(this.clients.filter(client => ids.indexOf(client.id) > -1))));
    }

    filterClientsByNames(...names: string[]): Promise<any[]> {
        return new Promise((resolve => resolve(this.clients.filter(client => names.some(name => client.name.indexOf(name) > -1)))));
    }

    getClientByName(name: string): Promise<any> {
        return new Promise(resolve => resolve(this.clients.find(client => client.name.indexOf(name) > -1)));
    }

    getClientByPolicyNumber(policyNumber: string): Promise<any> {
        const policy = this.policies.find(policy => policy.id === policyNumber);

        return new Promise((resolve, reject) => {
            if (!policy) return reject();

            return resolve(this.clients.find(client => client.id === policy.clientId));
        });
    }

    getClients(): Promise<any[]> {
        return new Promise(resolve => resolve(this.clients));
    }

    async getPoliciesByClientName(name: string): Promise<any[]> {
        const client = await this.getClientByName(name);
        return new Promise(resolve => resolve(this.policies.filter(policy => policy.clientId === client.id)));
    }
}
