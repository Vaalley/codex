import { client } from './databaseClient';

async function signup(email: string, password: string) {
	const user = await client.execute(
		`INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *`,
		[email, password]
	);
	return user;
}

async function signin(email: string, password: string) {
	const user = await client.execute(`SELECT * FROM users WHERE email = $1 AND password = $2`, [
		email,
		password
	]);
	return user;
}

export { signup, signin };
