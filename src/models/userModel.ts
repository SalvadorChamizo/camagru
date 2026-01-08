export const UserModel = {
    async create({ email, username, password }: { email: string, username: string, password: string }) {
        const hashed = await hashPassword(password);
        const query = `INSERT INTO users (email, username, password) VALUES(?, ?, ?)`;
        return db.execute(query, [email, username, hashed]);
    }
}