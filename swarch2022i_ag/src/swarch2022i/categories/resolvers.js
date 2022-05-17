import { generalRequest, getRequest } from '../../utilities';
import { url, port } from './server';

const URL = `http://${url}:${port}`;

const resolvers = {
	Query: {
		userByemail: (_, { email }) =>
			generalRequest(`${URL}/userInfo`, 'GET', email),
	},
	Mutation: {
		createUser: (_, { user }) =>
			generalRequest(`${URL}/register`, 'POST', user),
		loginUser: (_, { user }) =>
			generalRequest(`${URL}/login`, 'POST', user),
		history: (_, { user }) =>
			generalRequest(`${URL}/history`, 'POST', String),
		notifications: (_, { user }) =>
			generalRequest(`${URL}/notifications`, 'POST', String),
//		updateCategory: (_, { id, user }) =>
//			generalRequest(`${URL}/register/${id}`, 'PUT', user),
//		deleteCategory: (_, { id }) =>
//			generalRequest(`${URL}/register/${id}`, 'DELETE')
	}
};

export default resolvers;
