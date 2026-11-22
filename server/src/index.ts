import dotenv from "dotenv"
import server from "./app.ts"


dotenv.config({
    path:'./.env'
})


server.listen(process.env.PORT || 8000,()=>{
    console.log("Server is Running")
})
