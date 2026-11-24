import { io } from "socket.io-client";

const socketUrl =
  typeof window !== "undefined" && window.location.hostname !== "localhost"
    ? `http://${window.location.hostname}:8000`
    : "http://localhost:8000";

const socket = io(socketUrl, {
  autoConnect: false,
  reconnectionAttempts: 5,
  timeout: 10000,
});

export default socket;
