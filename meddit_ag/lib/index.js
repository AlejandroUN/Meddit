'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Koa = _interopDefault(require('koa'));
var KoaRouter = _interopDefault(require('koa-router'));
var koaLogger = _interopDefault(require('koa-logger'));
var koaBody = _interopDefault(require('koa-bodyparser'));
var koaCors = _interopDefault(require('@koa/cors'));
var apolloServerKoa = require('apollo-server-koa');
var merge = _interopDefault(require('lodash.merge'));
var GraphQLJSON = _interopDefault(require('graphql-type-json'));
var graphqlTools = require('graphql-tools');
var request = _interopDefault(require('request-promise-native'));
var graphql = require('graphql');

/**
 * Creates a request following the given parameters
 * @param {string} url
 * @param {string} method
 * @param {object} [body]
 * @param {boolean} [fullResponse]
 * @return {Promise.<*>} - promise with the error or the response object
 */
async function generalRequest(url, method, body, fullResponse) {
	const parameters = {
		method,
		uri: encodeURI(url),
		body,
		json: true,
		resolveWithFullResponse: fullResponse
	};
	if (process.env.SHOW_URLS) {
		// eslint-disable-next-line
		console.log(url);
	}

	try {
		return await request(parameters);
	} catch (err) {
		return err;
	}
}

/**
 * Adds parameters to a given route
 * @param {string} url
 * @param {object} parameters
 * @return {string} - url with the added parameters
 */
function addParams(url, parameters) {
	let queryUrl = `${url}?`;
	for (let param in parameters) {
		// check object properties
		if (
			Object.prototype.hasOwnProperty.call(parameters, param) &&
			parameters[param]
		) {
			if (Array.isArray(parameters[param])) {
				queryUrl += `${param}=${parameters[param].join(`&${param}=`)}&`;
			} else {
				queryUrl += `${param}=${parameters[param]}&`;
			}
		}
	}
	return queryUrl;
}

/**
 * Generates a GET request with a list of query params
 * @param {string} url
 * @param {string} path
 * @param {object} parameters - key values to add to the url path
 * @return {Promise.<*>}
 */
function getRequest(url, path, parameters) {
	const queryUrl = addParams(`${url}/${path}`, parameters);
	return generalRequest(queryUrl, 'GET');
}

/**
 * Merge the schemas in order to avoid conflicts
 * @param {Array<string>} typeDefs
 * @param {Array<string>} queries
 * @param {Array<string>} mutations
 * @return {string}
 */
function mergeSchemas(typeDefs, queries, mutations) {
	return `${typeDefs.join('\n')}
    type Query { ${queries.join('\n')} }
    type Mutation { ${mutations.join('\n')} }`;
}

function formatErr(error) {
	const data = graphql.formatError(error);
	const { originalError } = error;
	if (originalError && originalError.error) {
		const { path } = data;
		const { error: { id: message, code, description } } = originalError;
		return { message, code, description, path };
	}
	return data;
}

const comunityTypeDef = `
  type Comunity {
      id: Int!
      name: String!
      description: String!
      creatorId: Int!
  }
  input ComunityInput {
      name: String!
      description: String!
      creatorId: Int!
  }`;

const comunityQueries = `
      allComunities: [Comunity]!
      comunityById(id: Int!): Comunity!
  `;

const comunityMutations = `
    createComunity(comunity: ComunityInput!): Comunity!
    updateComunity(id: Int!, comunity: ComunityInput!): Comunity!
    deleteComunity(id: Int!): Int
`;

const url = '172.17.0.4';
const port = '4000';
const entryPoint = 'comunity';

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

const commentTypeDef = `
  type Comment {
    id: String!
    userId: Int!
    videoId: Int!
    date: String!
    description: String!
    likes: Int!
    dislikes: Int!
  }
  input CommentInput {
    UserId: Int!
    VideoId: Int!
    Date: String!
    Description: String!
    Likes: Int!
    Dislikes: Int!
  }`;

const commentQueries = `
      GetAllComments: [Comment]!
      GetCommentDetails(id: String!): Comment!
  `;

const commentMutations = `
    CreateComment(comment: CommentInput!): Comment!
    UpdateComment(id: String!, comment: CommentInput!): Comment!
    DeleteComment(id: String!): String
`;

const url$1 = 'host.docker.internal';
const port$1 = '49156';
const entryPoint$1 = 'api/comment';

const URL$1 = `http://${url$1}:${port$1}/${entryPoint$1}`;

const resolvers$1 = {
	Query: {
		GetAllComments: (_) =>
			getRequest(URL$1, ''),
		GetCommentDetails: (_, { id }) =>
			generalRequest(`${URL$1}/${id}`, 'GET'),
	},
	Mutation: {
		CreateComment: (_, { comment }) =>
			generalRequest(`${URL$1}/`, 'POST', comment),
		UpdateComment: (_, { id, comment }) =>
			generalRequest(`${URL$1}/${id}`, 'PUT', comment),
		DeleteComment: (_, { id }) =>
			generalRequest(`${URL$1}/${id}`, 'DELETE')
	}
};

const snhTypeDef = `
  type Channel_suscription {
      id: Int!
      id_user: Int!
      id_channel: Int!
  }

  type Community_suscription {
      id: Int!
      id_user: Int!
      id_community: Int!
  }

  type Record {
      id: Int!
      id_user: Int!
      id_video: Int!
      position_inside_record: Int!
  }
  
  input Channel_suscriptionInput {
      id_user: Int!
      id_channel: Int!
  }

  input Community_suscriptionInput {
      id_user: Int!
      id_community: Int!
  }

  input RecordInput {
      id_user: Int!
      id_video: Int!
      position_inside_record: Int!
  }`;

const snhQueries = `
    all_channel_suscriptions: [Channel_suscription]!
    channel_suscriptions_by_userId(userId: Int!): [Channel_suscription]!
    all_community_suscriptions: [Community_suscription]!
    community_suscriptions_by_userId(userId: Int!): [Community_suscription]!
    record_by_userId(userId: Int!): [Record]!
  `;

const snhMutations = `
    create_channel_suscription(channel_suscription: Channel_suscriptionInput!): Channel_suscription!
    delete_channel_suscription(id: Int!): Int
    create_community_suscription(community_suscription: Community_suscriptionInput!): Community_suscription!
    delete_community_suscription(id: Int!): Int
    insert_to_record(record: RecordInput!): Record!
    delete_from_record(id: Int!): Int
`;

const url$2 = 'host.docker.internal';
//export const url = '172.17.0.2'
const port$2 = '8080';
const entryPoint$2 = 'api';

const URL$2 = `http://${url$2}:${port$2}/${entryPoint$2}`;

const resolvers$2 = {
	Query: {
		all_channel_suscriptions: (_) =>
			getRequest(`${URL$2}/channel_suscriptions`, ''),

		channel_suscriptions_by_userId: (_, { userId }) =>
			generalRequest(`${URL$2}/channel_suscriptions/byId/${userId}`, 'GET'),

		all_community_suscriptions: (_) =>
			getRequest(`${URL$2}/community_suscriptions`, ''),

		community_suscriptions_by_userId: (_, { userId }) =>
			generalRequest(`${URL$2}/community_suscriptions/byId/${userId}`, 'GET'),

		record_by_userId: (_, { userId }) =>
			generalRequest(`${URL$2}/record/byId/${userId}`, 'GET')
	},
	Mutation: {
		create_channel_suscription: (_, { channel_suscription }) =>
			generalRequest(`${URL$2}/channel_suscriptions`, 'POST', channel_suscription),

		delete_channel_suscription: (_, { id }) =>
			generalRequest(`${URL$2}/channel_suscriptions/${id}`, 'DELETE'),

		create_community_suscription: (_, { community_suscription }) =>
			generalRequest(`${URL$2}/community_suscriptions`, 'POST', community_suscription),

		delete_community_suscription: (_, { id }) =>
			generalRequest(`${URL$2}/community_suscriptions/${id}`, 'DELETE'),

		insert_to_record: (_, { record }) =>
			generalRequest(`${URL$2}/record`, 'POST', record),

		delete_from_record: (_, { id }) =>
			generalRequest(`${URL$2}/record/${id}`, 'DELETE')
	}
};

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		commentTypeDef,
		comunityTypeDef,
		snhTypeDef
		
	],
	[
		commentQueries,
		comunityQueries,
		snhQueries
	],
	[
		commentMutations,
		comunityMutations,
		snhMutations
	]	
);

// Generate the schema object from your types definition.
var graphQLSchema = graphqlTools.makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON		
		resolvers$1,
		resolvers,
		resolvers$2
	)
});

const app = new Koa();
const router = new KoaRouter();
const PORT = process.env.PORT || 5000;

app.use(koaLogger());
app.use(koaCors());

// read token from header
app.use(async (ctx, next) => {
	if (ctx.header.authorization) {
		const token = ctx.header.authorization.match(/Bearer ([A-Za-z0-9]+)/);
		if (token && token[1]) {
			ctx.state.token = token[1];
		}
	}
	await next();
});

// GraphQL
const graphql$1 = apolloServerKoa.graphqlKoa((ctx) => ({
	schema: graphQLSchema,
	context: { token: ctx.state.token },
	formatError: formatErr
}));
router.post('/graphql', koaBody(), graphql$1);
router.get('/graphql', graphql$1);

// test route
router.get('/graphiql', apolloServerKoa.graphiqlKoa({ endpointURL: '/graphql' }));

app.use(router.routes());
app.use(router.allowedMethods());
// eslint-disable-next-line
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
