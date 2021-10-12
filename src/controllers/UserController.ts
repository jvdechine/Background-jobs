import { NextFunction, Request, Response } from "express";

import User from "../classes/User";
import IUserController from "../interfaces/controllers/IUserController";
import Queue from '../lib/Queue';

class UserController implements IUserController{
    constructor(){

    }

    async store(req: Request, res: Response, next: NextFunction) {
        var user = new User(req.body.name, req.body.email, req.body.password);

        await Queue.add("RegistrationMail", user, { attempts: 3, priority: 1 })
        
        res.status(200).json(user.toJson())
    }
}

export default new UserController();