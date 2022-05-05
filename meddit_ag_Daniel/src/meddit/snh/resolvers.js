import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		all_channel_suscriptions: (_) =>
			getRequest(`${URL}/channel_suscriptions`, ''),

		channel_suscriptions_by_userId: (_, { userId }) =>
			generalRequest(`${URL}/channel_suscriptions/byId/${userId}`, 'GET'),

		all_community_suscriptions: (_) =>
			getRequest(`${URL}/community_suscriptions`, ''),

		community_suscriptions_by_userId: (_, { userId }) =>
			generalRequest(`${URL}/community_suscriptions/byId/${userId}`, 'GET'),

		record_by_userId: (_, { userId }) =>
			generalRequest(`${URL}/record/byId/${userId}`, 'GET')
	},
	Mutation: {
		create_channel_suscription: (_, { channel_suscription }) =>
			generalRequest(`${URL}/channel_suscriptions`, 'POST', channel_suscription),

		delete_channel_suscription: (_, { id }) =>
			generalRequest(`${URL}/channel_suscriptions/${id}`, 'DELETE'),

		create_community_suscription: (_, { community_suscription }) =>
			generalRequest(`${URL}/community_suscriptions`, 'POST', community_suscription),

		delete_community_suscription: (_, { id }) =>
			generalRequest(`${URL}/community_suscriptions/${id}`, 'DELETE'),

		insert_to_record: (_, { record }) =>
			generalRequest(`${URL}/record`, 'POST', record),

		delete_from_record: (_, { id }) =>
			generalRequest(`${URL}/record/${id}`, 'DELETE')
	}
};

export default resolvers;
