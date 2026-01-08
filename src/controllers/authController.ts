import { IncomingMessage, ServerResponse } from "http";
import { parseBody } from "../utils/parseBody";
import { UserModel } from "../models/userModel";


export async function registerUserController(req: IncomingMessage, res: ServerResponse) {

    try {
        const body = await parseBody(req);

        const { email, username, password, confirmPassword } = body;

        if (password !== confirmPassword) {
            res.statusCode = 400;
            res.end("Passwords do not match");
            return;
        }

        const result = await UserModel.create({ email, username, password });

        res.statusCode = 201;
        res.end("User created");
    } catch (err) {
        res.statusCode = 500;
        res.end("Server error");
    }
}