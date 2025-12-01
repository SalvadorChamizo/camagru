import { IncomingMessage, ServerResponse } from "http";
import { handleAuthRoutes } from "./routes/authRoutes"
import { handleGalleryRoutes } from "./routes/galleryRoutes";
import { handleUserRoutes } from "./routes/userRoutes";

import fs from "fs";
import path from "path";

export const app = (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url;
    const method = req.method;

    if (url && url.startsWith("/public/")) {
        const staticPath = path.join(__dirname, "..");
        const filePath = path.join(staticPath, "src", url);
        if (fs.existsSync(filePath)) {
            const extension = path.extname(filePath);

            const mimeTypes: Record<string, string> = {
                ".css": "text/css",
                ".js": "text/javascript",
                ".png": "image/png",
                ".jpg": "image/jpeg",
                ".jpeg": "image/jpeg",
                ".svg": "image/svg+xml",
            };

            res.setHeader("Content-Type", mimeTypes[extension] || "application/octet-stream");
            res.end(fs.readFileSync(filePath));
            return;
        }
    }

    if (url === "/" && method === "GET") {
        const filePath = path.join(process.cwd(), "src", "views", "home.html");
        const html = fs.readFileSync(filePath, "utf-8");

        res.setHeader("Content-Type", "text/html");
        res.end(html);
        return ;
    }
    
    handleAuthRoutes(req, res);
    handleGalleryRoutes(req, res);
    handleUserRoutes(req, res);
};