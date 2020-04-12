var Express = require("express");
var Http = require("http");
var WebSocket = require("ws");

const app = Express();

const server = Http.createServer(app);

const webSocketServer = new WebSocket.Server({ server });

const onMessage = (socket, message) => {
  console.log("received : " + message);
  socket.send("reply to : " + message);
};

const onConnection = (socket) => {
  socket.on("message", (message) => onMessage(socket, message));

  console.log("Something connected !");
  socket.send("Connected !");
};

webSocketServer.on("connection", (socket) => onConnection(socket));

server.listen(1234, () => console.log("Started server.."));
