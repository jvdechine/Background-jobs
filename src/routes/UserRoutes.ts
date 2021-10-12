import express, { Router } from 'express'
import UserController from '../controllers/UserController';
import IRoutes from '../interfaces/routes/IRoutes';

class UserRoutes implements IRoutes{
    router: Router

    constructor() {
        this.router = express.Router();
        this.routes();
    }

    routes() {
        this.router.post('/', UserController.store);
    }
}

export default new UserRoutes().router;