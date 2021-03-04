const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const port = process.env.PORT || 3000;

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("message", (msg) => {
    console.log(msg);
  });
});

server.listen(port, () => {
  console.log("server running on 3000");
});
