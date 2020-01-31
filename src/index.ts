import { SERVER_PORT, SERVER_HOST } from './config';
import { SynchronizeData } from './poller';
import { Server } from './server';


async function Main() {
    await SynchronizeData();

    Server.listen(SERVER_PORT, SERVER_HOST, () => {
        console.log(`Server listening on host ${SERVER_HOST} and port ${SERVER_PORT}`);
    });
}

Main();
