import { WEBSERVICE_POLICIES_URL, WEBSERVICE_CLIENTS_URL } from './config';

import { GetClients, GetPolicies } from './services';
import { Clients, Policies } from './storage';

const SyncClients = async () => {
    const clients = await GetClients(WEBSERVICE_CLIENTS_URL);
    Clients.length = 0;
    Clients.push(...clients.clients);
};

const SyncPolicies = async () => {
    const policies = await GetPolicies(WEBSERVICE_POLICIES_URL);
    Policies.length = 0;
    Policies.push(...policies.policies);
};

export const SynchronizeData = async () => {
    await SyncClients();
    await SyncPolicies();
};
