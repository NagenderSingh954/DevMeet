class ApiError extends Error{
    statusCode:number;
    data:null;
    message:string;
    error:unknown[];

    constructor(statusCode:number,message:string="Something went Wrong",error:unknown[]=[],stack?:string){
        super(message)
        this.statusCode=statusCode||404,
        this.message=message,
        this.data=null,
        this.error=error
        if(stack){
            this.stack=stack
        }else{
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export {ApiError}