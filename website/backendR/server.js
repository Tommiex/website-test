import express from "express";
import { text } from "./config.js";

const server = express();

server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
server.get("/", (req, res) => {
  res.send(text);
});

server.listen(9080, () => {
  console.log("run server 9080");
});
