import { NextFunction, Request, Response } from "express";

import IUserController from "../interfaces/controllers/IUserController";
import Queue from '../lib/Queue';
import Product from "../classes/Product";

class ProductController implements IUserController{
    constructor(){

    }

    async store(req: Request, res: Response, next: NextFunction) {
        var product = new Product(req.body.name, req.body.value, new Date());

        await Queue.add("ProductToSQLServer", product, { attempts: 3, priority: 1, delay: 1000 })
        await Queue.add("ProductToMongo", product, { attempts: 3, priority: 2, delay: 1000 })
        
        res.status(200).json(product.toJson())
    }
}

export default new ProductController();