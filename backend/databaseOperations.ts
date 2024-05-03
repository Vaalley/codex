import { client } from './databaseClient';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

async function hashPassword(password: string): Promise<string> {
	const saltRounds = 10; // Adjust the number of rounds as necessary
	const hashedPassword = await bcrypt.hash(password, saltRounds);
	return hashedPassword;
}

export async function signin(email: string, password: string) {
	const userResult = await client.execute({
		sql: 'SELECT * FROM users WHERE email = :email',
		args: { email }
	});

	if (userResult.rows.length === 0) {
		throw new Error('User not found');
	}

	const user = userResult.rows[0];

	const isMatch = await bcrypt.compare(password, user.password_hash);
	if (isMatch) {
		// console.log(user);
		await client.execute({
			sql: 'UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE ID = :id',
			args: { id: user.ID }
		});

		const token = jwt.sign({ id: user.ID, email: user.email }, process.env.JWT_SECRET_KEY, {
			expiresIn: '1h'
		});

		return { user, token };
	} else {
		throw new Error('Invalid email or password');
	}
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
