import { NextApiRequest, NextApiResponse } from "next";
import { Server } from "socket.io";
import { Server as NetServer } from "http";

type CustomApiResponse = NextApiResponse & {
  socket: {
    server: NetServer & {
      io?: Server;
    };
  };
};

export default function SocketHandler(
  req: NextApiRequest,
  res: CustomApiResponse
) {
  if (res.socket.server.io) {
    console.log("Socket is already running");
  } else {
    console.log("Socket is initializing");
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      console.log("A user connected");

      socket.on("chat message", (msg: string) => {
        console.log("message: " + msg);
        io.emit("chat message", msg); // Broadcast the message to all clients
      });

      socket.on("disconnect", () => {
        console.log("A user disconnected");
      });
    });
  }
  res.end();
}
