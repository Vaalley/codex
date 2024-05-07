import axios from 'axios';

export async function load() {
	const url = `https://codex-backend-dun.vercel.app/api/hello?apiKey=${import.meta.env.VITE_API_KEY}`;

	const response = await axios.get(url);

	return {
		foo: 'bar',
		data: response.data
	}
}

