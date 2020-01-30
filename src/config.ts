import * as dotenv from 'dotenv';

const config = dotenv.config().parsed || {};

console.log(config);

export const WEBSERVICE_CLIENTS_URL = config.WEBSERVICE_CLIENTS_URL;
export const WEBSERVICE_POLICIES_URL = config.WEBSERVICE_POLICIES_URL;

export const ADMIN_PASSWORD = config.ADMIN_PASSWORD;
export const USER_PASSWORD = config.USER_PASSWORD;

export const SERVER_HOST = config.SERVER_HOST;
export const SERVER_PORT = parseInt(config.SERVER_PORT);
