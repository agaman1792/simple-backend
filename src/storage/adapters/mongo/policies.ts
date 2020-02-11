import { Schema, model } from 'mongoose';

export interface IApiPolicy {
    id: string;
    amountInsured: number;
    email: string;
    inceptionDate: string;
    installmentPayment: boolean;
    clientId: string;
}

export const PolicySchema = new Schema({
    id: Schema.Types.String,
    amountInsured: Schema.Types.Number,
    email: Schema.Types.String,
    inceptionDate: Schema.Types.String,
    installmentPayment: Schema.Types.Boolean,
    clientId: Schema.Types.String
});

export const PolicyModel = model('Policies', PolicySchema);
