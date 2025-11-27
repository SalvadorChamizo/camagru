import http from "http";

const server = http.createServer((req, res) => {
    res.end("Camagru backend running");
});

server.listen(8080, () => {
    console.log("Server running on port 8080");
});