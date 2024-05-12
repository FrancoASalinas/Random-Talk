import { createServer } from "node:http";
import { type AddressInfo } from "node:net";
import { io as ioc, type Socket as ClientSocket } from "socket.io-client";
import { Server, type Socket as ServerSocket } from "socket.io";
import mapEventsToServer from "../mapEventsToServer";

function waitFor(socket: ServerSocket | ClientSocket, event: string) {
  return new Promise(resolve => {
    socket.once(event, resolve);
  });
}

let io: Server, serverSocket: ServerSocket, clientSocket: ClientSocket;

beforeAll(done => {
  const httpServer = createServer();

  io = new Server(httpServer);

  httpServer.listen(() => {
    const port = (httpServer.address() as AddressInfo).port;

    clientSocket = ioc(`http://localhost:${port}`);

    io.on("connection", socket => {
      serverSocket = socket;
      mapEventsToServer(io, socket);
      done()
    });

    clientSocket.on("connect", done);
  });
});

afterAll(() => {
  io.close();
  clientSocket.disconnect();
});

describe("Message event", () => {
  it("Socket should emit an event with the received message", done => {
    const text = "this is a test message";

    clientSocket.on("message", message => {
      expect(message).toBe(text);
      done();
    });

    clientSocket.emit("message", text);
  });
});
