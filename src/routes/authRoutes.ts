import { IncomingMessage, ServerResponse } from "http";

export function handleAuthRoutes(req: IncomingMessage, res: ServerResponse) {
    const url = req.url;
    const method = req.method;

    if (url === "/signup" && method === "GET") {
        res.end("<h1>Sign Up Page</h1>");
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