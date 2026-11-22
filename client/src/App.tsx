import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import roomIdGenerate from './utils/roomcreation.ts'
import { io } from "socket.io-client";



function App() {
  const [room, setRoom] = useState("")
  const [user, setUser] = useState("")

  useEffect(() => {
    axios.get("http://localhost:8000/user")
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err))

    setRoom(roomIdGenerate)

  }, [])
  const [socket, setSocket] = useState<any>(null);

  useEffect(() => {
    const newSocket = io("http://localhost:8000");

    newSocket.on("connect", () => {
      console.log("Connected:", newSocket.id);
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);


  return (
    <>
      <h1>This is the server setup stage </h1>
      <div>{user.data?.name}</div>
      <div>{room}</div>
    </>
  )
}

export default App
