import express, { Router } from 'express'
import ProductControler from '../controllers/ProductController';
import IRoutes from '../interfaces/routes/IRoutes';

class ProductRoutes implements IRoutes{
    router: Router

    constructor() {
        this.router = express.Router();
        this.routes();
    }

    routes() {
        this.router.post('/', ProductControler.store);
    }
}

export default new ProductRoutes().router;