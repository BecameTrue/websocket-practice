const Express = require("express");
const Http = require("http");
const WebSocket = require("ws");

const app = Express();

console.log("APP\n", app);

const server = Http.createServer(app);

const webSocketServer = new WebSocket.Server({ server });

// if message comes in to server, send same message to client.
const onMessage = (socket, message) => {
  console.log("received : " + message);
  socket.send("echo : " + message);
};

// if client connects, register "on message event"
// and notify that client is connected.
const onConnection = (socket) => {
  socket.on("message", (message) => onMessage(socket, message));

  console.log("Something connected !");
  socket.send("Connected !");
};

webSocketServer.on("connection", (socket) => onConnection(socket));

server.listen(1234, () => console.log("Started server.."));
