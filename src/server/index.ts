import Express from 'express';

import { AuthenticationRouteHandler, UseAuthentication } from './authentication';
import { UseAuthorization } from './authorization';
import { UseCompression, UseResponseTime, UseBodyParser } from './third-party';

import { GetPoliciesRouteHandler } from './policies/policies.route';
import { FilterUsersRouteHandler, GetUserByPolicyNumberRouteHandler } from './users/user.route';

export const Server = Express();

UseBodyParser(Server);
UseCompression(Server);
UseResponseTime(Server);

Server.post('/login', AuthenticationRouteHandler);
Server.use(UseAuthentication);

Server.get('/policies/:username', UseAuthorization('admin'), GetPoliciesRouteHandler);

Server.get('/users', UseAuthorization('user', 'admin'), FilterUsersRouteHandler);
Server.get('/users/policy/:policyNumber', UseAuthorization('admin'), GetUserByPolicyNumberRouteHandler);
