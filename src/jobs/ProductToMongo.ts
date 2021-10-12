import { Job } from 'bull'
import Product from '../classes/Product'
import ProductModel from '../interfaces/models/Mongo/Product';

export default {
    key: "ProductToMongo",
    async handle(product: Job<Product>) {
        const newProduct = new ProductModel({
            name: product.data.name,
            value: product.data.value,
            date: product.data.date
        })
        newProduct.save();
        product.progress(100);
    }
}