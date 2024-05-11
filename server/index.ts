import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const PORT = 3000;

const app = express();

const server = createServer(app);

const io = new Server(server);

io.on("connection", socket => {
  console.log("connected to server");
});

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

export { io, PORT };
