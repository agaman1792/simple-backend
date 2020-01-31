import { Application } from 'express';

import Compression from 'compression';
import ResponseTime from 'response-time';

export const UseCompression = (app: Application) => app.use(Compression());
export const UseResponseTime = (app: Application) => app.use(ResponseTime());
