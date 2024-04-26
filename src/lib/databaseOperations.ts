import { client } from './databaseClient';
import * as bcrypt from 'bcryptjs';

async function hashPassword(password: string): Promise<string> {
	const saltRounds = 10; // Adjust the number of rounds as necessary
	const hashedPassword = await bcrypt.hash(password, saltRounds);
	return hashedPassword;
}

export async function signup(username: string, email: string, password: string) {
	if (typeof username !== 'string' || username.length < 3) {
		throw new Error('Username must be at least 3 characters long');
	}

	if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		throw new Error('Email is not in a valid format');
	}

	if (typeof password !== 'string' || password.length < 8) {
		throw new Error('Password must be at least 8 characters long');
	}

	const hashedPassword = await hashPassword(password);
	const user = await client.execute({
		sql: 'INSERT INTO users (email, password_hash, username) VALUES (:email, :hashedPassword, :username) RETURNING *',
		args: { email, hashedPassword, username }
	});
	return user;
}

export async function signin(email: string, password: string) {
	// Fetch the user from the database by email
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
		// The passwords match, update the user's last-login and return the user data
		// console.log(user);
		await client.execute({
			sql: 'UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE ID = :id',
			args: { id: user.ID } // Make sure to use the correct case for the ID field, it should match your database schema.
		});

		return user;
	} else {
		throw new Error('Invalid email or password');
	}
}
