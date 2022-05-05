import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}`;

const resolvers = {
	Query: {
		allUsers: (_) =>
			getRequest(URL, ''),
		categoryById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createUser: (_, { user }) =>
			generalRequest(`${URL}/register`, 'POST', user),
		loginUser: (_, { user }) =>
			generalRequest(`${URL}/login`, 'POST', user),
//		updateCategory: (_, { id, user }) =>
//			generalRequest(`${URL}/register/${id}`, 'PUT', user),
//		deleteCategory: (_, { id }) =>
//			generalRequest(`${URL}/register/${id}`, 'DELETE')
	}
};

export default resolvers;
