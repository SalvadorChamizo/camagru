import { IncomingMessage, ServerResponse } from "http";
import path from "path";
import fs from "fs";

export function handleAuthRoutes(req: IncomingMessage, res: ServerResponse) {
    const url = req.url;
    const method = req.method;

    if (url === "/signup" && method === "GET") {
        const filePath = path.join(process.cwd(), "src", "views", "signup.html");
        const html = fs.readFileSync(filePath, "utf-8");

        res.setHeader("Content-Type", "text/html");
        res.end(html);
        return ;
    }

    if (url === "/signup" && method === "POST") {
        res.end("Sign Up Controller");
        return ;
    }

    if (url === "/login" && method === "GET") {
        res.end("<h1>Log In Page</h1>");
        return ;
    }

    if (url === "/login" && method === "POST") {
        res.end("Login Controller");
        return ;
    }

    if (url === "/logout" && method === "POST") {
        res.end("Logout Controller");
        return ;
    }

    if (url === "/confirm-email" && method === "POST") {
        res.end("Confirm Email Controller");
        return ;
    }

    if (url === "/forgot-password" && method === "POST") {
        res.end("Forgot Password Controller");
        return ;
    }
    
    res.statusCode = 404;
    res.end("Not found");
}