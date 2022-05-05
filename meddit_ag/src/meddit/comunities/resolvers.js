import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allComunities: (_) =>
			getRequest(URL, ''),
		comunityById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createComunity: (_, { comunity }) =>
			generalRequest(`${URL}/`, 'POST', comunity),
		updateComunity: (_, { id, comunity }) =>
			generalRequest(`${URL}/${id}`, 'PUT', comunity),
		deleteComunity: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;
