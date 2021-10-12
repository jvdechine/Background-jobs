import { NextFunction, Request, Response } from "express";

export default interface IUserController{
    store(req: Request, res: Response, next: NextFunction);
}