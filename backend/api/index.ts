// import { signin, signup } from './databaseOperations';

// Bun.serve({
// 	async fetch(req) {
// 		const url = new URL(req.url);

// 		switch (url.pathname) {
// 			case '/signin':
// 				const { user, token } = await signin(
// 					url.searchParams.get('email'),
// 					url.searchParams.get('password')
// 				);
// 				// console.log(token);
// 				return new Response(token);
// 			case '/signup':
// 				return await signup(
// 					url.searchParams.get('username'),
// 					url.searchParams.get('email'),
// 					url.searchParams.get('password')
// 				);
// 			default:
// 				return new Response('404!');
// 		}
// 	}
// });

export default function (req, res) {
	res.statusCode = 200;
	res.json({ message: 'It works' });
}
