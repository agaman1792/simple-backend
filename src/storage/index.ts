import { STORAGE_URL } from '../config';

import { IStorage } from './interface';
import { MemoryStorage } from './adapters/memory';
import { MongooseStorage } from './adapters/mongo';

export let Storage: IStorage;

if (STORAGE_URL) {
    Storage = new MongooseStorage();
} else {
    Storage = new MemoryStorage();
}
