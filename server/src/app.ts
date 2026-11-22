import express,{Request,Response,RequestHandler,NextFunction} from 'express'
import {createServer} from 'http'
import { Server } from "socket.io";
import 'dotenv/config';
import cors from "cors";
import { ApiResponce } from './utils/ApiResponce.ts';
import { corsOptions } from './constant/config.ts';
import { disconnect } from 'cluster';


const app=express()
const server=createServer(app);
const io = new Server(server, { cors: corsOptions });
app.set("io", io)

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static('public'))       

const allowedOrigins=process.env.CORS_ORIGIN?.split(',').map(origin=>origin.trim())?? ["http://localhost:5173"];


app.use(
    cors({
        origin: (origin, callback) => {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
            
        },
        credentials: true,
    })
); 
app.get('/user',(req:Request,res:Response)=>{
    
    return res.status(200).json(
        new ApiResponce(200,{name:"hello"},"User Detail send",)
    )
})


io.on("connection",(socket)=>{
    
    console.log(socket.use)
    socket.on("disconnect",()=>{
        console.log("User Disconnected")
    })

})






app.use((err:any, req:Request, res:Response, next:NextFunction) => {
    res.status(err.statusCode || 500).json({
        success: err.success || false,
        message: err.message || "Internal Server Error",
        errors: err.errors || []
    });
});



export default server