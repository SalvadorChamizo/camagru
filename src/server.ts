import http from "http";
import { app } from "./app";

const server = http.createServer((req, res) => {
    app(req, res);
});

server.listen(8080, () => {
    console.log("Server running on port 8080");
});