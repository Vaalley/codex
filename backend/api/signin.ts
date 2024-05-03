// import { signin } from '../databaseOperations';

// export default async function (req: BunRequest): Promise<Response> {
// 	if (req.method === 'POST') {
// 		const { email, password } = await req.json();
// 		try {
// 			const { user, token } = await signin(email, password);
// 			return new Response(JSON.stringify({ user, token }), {
// 				status: 200,
// 				headers: {
// 					'Content-Type': 'application/json'
// 				}
// 			});
// 		} catch (error) {
// 			return new Response(JSON.stringify({ error: error.message }), {
// 				status: 400,
// 				headers: {
// 					'Content-Type': 'application/json'
// 				}
// 			});
// 		}
// 	} else {
// 		return new Response('Method Not Allowed', { status: 405 });
// 	}
// }

export default function signin(req, res) {
	res.statusCode = 200;
	res.json({ message: 'It works | Signin' });
}
