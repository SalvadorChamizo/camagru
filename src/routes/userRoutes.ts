import { IncomingMessage, ServerResponse } from "http";

export function handleUserRoutes(req: IncomingMessage, res: ServerResponse) {
    const url = req.url;
    const method = req.method;

    if (url === "/modify-username" && method === "POST") {

    }

    if (url === "/modify-password" && method === "POST") {

    }

    if (url === "/modify-email" && method === "POST") {

    }

    if (url === "/deactivate-notification" && method === "POST") {

    }
}