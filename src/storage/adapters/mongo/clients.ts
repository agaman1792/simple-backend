import { Schema, model } from 'mongoose';

export interface IClient {
    id: string;
    name: string;
    email: string;
    role: string;
}

export const ClientSchema = new Schema({
    id: Schema.Types.String,
    name: Schema.Types.String,
    email: Schema.Types.String,
    role: Schema.Types.String
});

export const ClientModel = model('Clients', ClientSchema);
