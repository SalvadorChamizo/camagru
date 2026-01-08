import { IncomingMessage } from "http";

export function parseBody(req: IncomingMessage, maxSize = 1_000_000): Promise<Record<string, any>> {

    return new Promise((resolve, reject) => {
        const contentType = (req.headers['content-type'] || '').split(';')[0].trim();

        let size = 0;
        const chunks: Buffer[] = [];

        req.on('data', (chunk: Buffer) => {
            size += chunk.length;
            if (size > maxSize) {
                req.destroy();
                reject(new Error('PayloadTooLarge'));
                return ;
            }
            chunks.push(chunk);
        });

        req.on('end', () => {
            const raw = Buffer.concat(chunks).toString('utf8');

            try {
                if (contentType === 'application/json') {
                    resolve(JSON.parse(raw));
                } else if (contentType === 'application/x-www-form-urlencoded' || contentType === '') {
                    const params = new URLSearchParams(raw);
                    const obj: Record<string, any> = {};
                    params.forEach((v, k) => { obj[k] = v; });
                    resolve(obj);
                } else {
                    resolve({ raw });
                }
            } catch (err) {
                reject(err);
            }
        });

        req.on('error', reject);
    });
}