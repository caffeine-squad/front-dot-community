import { api } from './api';

const auth = async (email: string, password: string): Promise<any> => {
	const resposta = await api 
		.post('/authenticate', { email, password })
		.then((res) => res.data)
		.catch((e) => {
			console.log(e);
		});
		return resposta
};
export { auth };
