import { IncomingMessage, ServerResponse } from "http";

export function handleGalleryRoutes(req: IncomingMessage, res: ServerResponse) {
    const url = req.url;
    const method = req.method;

    //Get All Gallery
    if (url === "/gallery" && method === "GET") {

    }

    //See a specific post
    if (url === "/post/:id" && method === "GET") {

    }

    //See a specific comment
    if (url === "/post/:id/comments" && method === "GET") {

    }

    //Write new comment
    if (url === "/post/:id/comments" && method === "POST") {

    }

    //Like or dislike a specific image
    if (url === "/post/:id/like" && method === "POST") {
        
    }
}