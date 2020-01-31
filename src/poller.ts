import { WEBSERVICE_POLICIES_URL, WEBSERVICE_CLIENTS_URL } from './config';

import { clientsApiService, policiesApiService } from './services';
import { Clients, Policies } from './storage';

const SyncClients = async () => {
    const clients = await clientsApiService.get(WEBSERVICE_CLIENTS_URL);
    Clients.length = 0;
    Clients.push(...clients);
};

const SyncPolicies = async () => {
    const policies = await policiesApiService.get(WEBSERVICE_POLICIES_URL);
    Policies.length = 0;
    Policies.push(...policies);
};

export const SynchronizeData = async () => {
    await SyncClients();
    await SyncPolicies();
};
