import { Request, Response, NextFunction, RequestHandler } from "express";

const asynchandler=(requestHandler:RequestHandler)=>{
    return (req:Request,res:Response,next:NextFunction):void=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
   
}

export {asynchandler}