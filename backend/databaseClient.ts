import { createClient } from '@libsql/client';

export const client = createClient({
	url: process.env.VITE_DB_URL,
	authToken: process.env.VITE_DB_TOKEN
});
