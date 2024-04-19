import { client } from './databaseClient';
import * as bcrypt from 'bcryptjs';

async function hashPassword(password: string): Promise<string> {
	const saltRounds = 10; // You can adjust the number of rounds as necessary
	const hashedPassword = await bcrypt.hash(password, saltRounds);
	return hashedPassword;
}

export async function signup(username: string, email: string, password: string) {
	const hashedPassword = await hashPassword(password);
	const user = await client.execute({
		sql: 'INSERT INTO users (email, password_hash, username) VALUES (:email, :hashedPassword, :username) RETURNING *',
		args: { email, hashedPassword, username }
	});
	return user;
}

export async function signin(email: string, password: string) {
	// Fetch the user from the database by email
	// You should select the password_hash instead of the password since you store hashed passwords
	const userResult = await client.execute({
		sql: 'SELECT * FROM users WHERE email = :email',
		args: { email }
	});

	// Check if a user was found
	if (userResult.rows.length === 0) {
		throw new Error('User not found');
	}

	const user = userResult.rows[0];

	// Use bcrypt.compare to check if the provided password matches the stored hashed password
	const isMatch = await bcrypt.compare(password, user.password_hash);
	if (isMatch) {
		// The passwords match, return the user data
		// console.log(user);
		return user;
	} else {
		throw new Error('Invalid email or password');
	}
}
