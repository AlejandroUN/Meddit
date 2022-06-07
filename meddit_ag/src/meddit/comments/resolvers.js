import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}/${entryPoint}`;

const resolvers = {
	Query: {
		GetAllComments: (_) =>
			getRequest(URL, ''),
		GetCommentDetails: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		CreateComment: (_, { comment }) =>
			generalRequest(`${URL}/`, 'POST', comment),
		UpdateComment: (_, { id, comment }) =>
			generalRequest(`${URL}/${id}`, 'PUT', comment),
		DeleteComment: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;
