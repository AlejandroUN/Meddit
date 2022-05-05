import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		videoById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createVideo: (_, { video }) =>
			generalRequest(`${URL}/`, 'POST', video),
		updateVideo: (_, { id, video }) =>
			generalRequest(`${URL}/${id}`, 'PUT', video),
		deleteVideo: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;
