import { io as ioc, type Socket as ClientSocket } from "socket.io-client";
import { Server, type Socket as ServerSocket } from "socket.io";
import { io as ioServer, PORT } from "../index";

function waitFor(socket: ServerSocket | ClientSocket, event: string) {
  return new Promise(resolve => {
    socket.once(event, resolve);
  });
}

describe("my awesome project", () => {

  async function setup(io: Server, port: number) {
    type Promise = {
      clientSocket: ClientSocket;
      io: Server;
    };

    const connection = new Promise<Promise>(resolve => {
      const clientSocket = ioc(`http://localhost:${port}`);
      clientSocket.on("connect", () =>
        resolve({ clientSocket: clientSocket, io: io })
      );
    });

    return await connection;
  }

  test.only("should work", async () => {
    const { clientSocket } = await setup(ioServer, PORT);

    clientSocket.emit("hello", (response: any) => {
      console.log('emitted')
      expect(response).toBe("got it");
    });
  }, 50000);

  //   test("should work with an acknowledgement", done => {
  //     serverSocket.on("hi", (cb: (arg0: string) => void) => {
  //       cb("hola");
  //     });
  //     clientSocket.emit("hi", (arg: any) => {
  //       expect(arg).toBe("hola");
  //       done();
  //     });
  //   });

  //   test("should work with emitWithAck()", async () => {
  //     serverSocket.on("foo", (cb: (arg0: string) => void) => {
  //       cb("bar");
  //     });
  //     const result = await clientSocket.emitWithAck("foo");
  //     expect(result).toBe("bar");
  //   });

  //   test("should work with waitFor()", () => {
  //     clientSocket.emit("baz");

  //     return waitFor(serverSocket, "baz");
  //   });
});
