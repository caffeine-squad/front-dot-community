import axios from 'axios';
import { api } from './api';

const auth = async (email: string, password: string): Promise<any> => {
	await api
		.post('/authenticate', { email, password })
		.then((res) => res.data)
		.catch((e) => {
			console.log(e);
		});
};
export { auth };
