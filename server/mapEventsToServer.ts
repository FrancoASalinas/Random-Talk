import { Server, Socket } from "socket.io";


export default function mapEventsToServer(server: Server, socket: Socket) {

  const listenersRecord = {
    message: (arg: string) => {
      server.emit("message", arg);
    },
  };

  Object.entries(listenersRecord).map(event => {
    socket.on(event[0], event[1]);
  })
}
