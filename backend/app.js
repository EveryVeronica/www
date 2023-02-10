const quotes = require("inspirational-quotes");
var crypto = require("crypto");
const admin = require("../backend/config/fbConfig");

const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});



io.on("connection", (socket) => {


console.log('ทดสอบ'+socket);


  socket.on("config_room",(data) => {
    console.log('config_room'+data);

  });

});

server.listen(3001, () => {
  console.log("SERVER IS RUNNING");
});



