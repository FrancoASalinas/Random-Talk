import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import mapEventsToServer from "./mapEventsToServer";

const PORT = 3000;

const app = express();

const server = createServer(app);

const io = new Server(server);

io.on("connection", socket => mapEventsToServer(io, socket));

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
