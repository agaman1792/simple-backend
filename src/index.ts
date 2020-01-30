import {
    WEBSERVICE_POLICIES_URL, WEBSERVICE_CLIENTS_URL, SERVER_PORT, SERVER_HOST
} from './config';

import { MakeApiRequest, IPolicy, IClient } from './services';
import { Server } from './server';
import { Clients, Policies } from './storage';

async function SyncPolicies() {
    const policies = await MakeApiRequest<{ policies: IPolicy[] }>(WEBSERVICE_POLICIES_URL);
    Policies.length = 0;
    Policies.push(...policies.policies);
};

async function SyncClients() {
    const clients = await MakeApiRequest<{ clients: IClient[] }>(WEBSERVICE_CLIENTS_URL);
    Clients.length = 0;
    Clients.push(...clients.clients);
};

async function Main() {
    await SyncClients();
    console.log(`Synchronized clients`);
    console.log(Clients);

    await SyncPolicies();
    console.log(`Synchronized policies`);
    console.log(Policies);

    Server.listen(SERVER_PORT, SERVER_HOST, () => {
        console.log(`Server listening on host ${SERVER_HOST} and port ${SERVER_PORT}`);
    });
}

Main();
