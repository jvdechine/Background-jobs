import { Schema, model } from 'mongoose';
import Product from '../../../classes/Product';

const schema = new Schema<Product>({
    name: { type: String, required: true },
    value: { type: Number, required: true },
    date: { type: Date, required: true }
});

export default model<Product>('Product', schema);