import { Application } from 'express';

import BodyParser from 'body-parser';
import Compression from 'compression';
import ResponseTime from 'response-time';

export const UseBodyParser = (app: Application) => app.use(BodyParser.json());
export const UseCompression = (app: Application) => app.use(Compression());
export const UseResponseTime = (app: Application) => app.use(ResponseTime());
