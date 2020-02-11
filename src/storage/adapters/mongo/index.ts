import { connect } from 'mongoose';

import { STORAGE_URL } from '../../../config';
import { IStorage } from '../../interface';

import { ClientModel } from './clients';
import { PolicyModel } from './policies';

export class MongooseStorage implements IStorage {

    async connect(): Promise<boolean> {
        await connect(STORAGE_URL);
        return new Promise(resolve => resolve(true));
    }

    async setClients(clients: any[]) {
        await ClientModel.deleteMany({
            id: { $nin: clients.map(client => client.id) }
        });

        clients.forEach(async client => {
            if (await ClientModel.exists({ id: client.id })) return;
            await ClientModel.create(client);
        });
    }

    async setPolicies(policies: any[]) {
        await PolicyModel.deleteMany({
            id: { $nin: policies.map(policy => policy.id) }
        });

        policies.forEach(async policy => {
            if (await PolicyModel.exists({ id: policy.id })) return;
            await PolicyModel.create(policy);
        });
    }

    async filterClientsByIds(...ids: string[]): Promise<any[]> {
        return await ClientModel.find({
            id: { $in: ids }
        });
    }

    async filterClientsByNames(...names: string[]): Promise<any[]> {
        return await ClientModel.find({
            name: { $in: names }
        });
    }

    async getClientByName(name: string): Promise<any> {
        return await ClientModel.findOne({
            name
        });
    }

    async getClientByPolicyNumber(policyNumber: string): Promise<any> {
        const policy = await PolicyModel.findOne({ id: policyNumber });

        if (!policy) return new Promise(resolve => resolve({}));

        return await ClientModel.findOne({ id: policy.get('clientId') });
    }

    async getClients(): Promise<any[]> {
        return ClientModel.find();
    }

    async getPoliciesByClientName(name: string): Promise<any[]> {
        const client = await this.getClientByName(name);
        return await PolicyModel.find({ clientId: client.get('id') });
    }
}
