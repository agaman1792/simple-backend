import { WEBSERVICE_POLICIES_URL, WEBSERVICE_CLIENTS_URL, STORAGE_SYNC_INTERVAL } from './config';

import { clientsApiService, policiesApiService } from './services';
import { Storage } from './storage';

const SyncClients = async () => {
    const clients = await clientsApiService.get(WEBSERVICE_CLIENTS_URL);
    Storage.setClients(clients);
};

const SyncPolicies = async () => {
    const policies = await policiesApiService.get(WEBSERVICE_POLICIES_URL);
    Storage.setPolicies(policies);
};

export const SynchronizeData = async () => {
    await Storage.connect();

    await SyncClients();
    await SyncPolicies();

    setInterval(async () => {
        await SyncClients();
        await SyncPolicies();
    }, STORAGE_SYNC_INTERVAL);
};
