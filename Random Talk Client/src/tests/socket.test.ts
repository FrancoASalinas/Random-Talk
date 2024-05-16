import { type AddressInfo } from "node:net";
import { io as ioc, type Socket as ClientSocket } from "socket.io-client";
import { createServer } from "node:http";
import { Server, type Socket as ServerSocket } from "socket.io";

let io: Server, serverSocket: ServerSocket, clientSocket: ClientSocket;

  beforeAll(async () => {
    const httpServer = createServer();

    io = new Server(httpServer);

    await new Promise<void>(resolve => {
      httpServer.listen(() => {
        const port = (httpServer.address() as AddressInfo).port;

        clientSocket = ioc(`http://localhost:${port}`);

        io.on("connection", socket => {
          serverSocket = socket;
          // mapEventsToServer(io, socket);
        });
        clientSocket.on("connect", () => resolve());
      });
    });
  });

  afterAll(() => {
    io.close();
    clientSocket.disconnect();
  });