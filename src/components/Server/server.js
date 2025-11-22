import express from "express"
import  { createServer, METHODS } from "http"
import { Server } from "socket.io";
const app=express();
const server=createServer(app);

const io=new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        methods:["GET","POST"]
    }
 });

io.on("connection",(socket)=>{
    console.log(" Client Connected : "+socket.id)

    socket.on("new_client", (data) => {
        
        // Broadcast to ALL other clients (except the sender)
        socket.broadcast.emit("new_client", {
            ...data,
            message: "A new user joined!",
            timestamp: new Date().toISOString()
        });
        
        
    });

    socket.on("disconnect", () => {
        console.log(" Client disconnected:", socket.id);
    });
 })

 server.listen(4001,()=>{console.log("Server is running")});