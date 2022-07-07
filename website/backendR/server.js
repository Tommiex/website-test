import express from "express";
import { text } from "./config.js";
const server = express();

server.get((req, res, next) => {
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
server.listen(8080, () => {
    console.log("run server 8080");
  });
